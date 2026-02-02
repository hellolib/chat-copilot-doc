#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
爬取 promptup.net 的提示词数据，存储到 SQLite 数据库和 JSON 文件
"""

import json
import sqlite3
import requests
import time
from datetime import datetime
from typing import Optional, Dict, Set
from urllib.parse import urlparse

BASE_URL = "https://promptup.net/api/prompts/public"
LIMIT = 9
DB_FILE = "promptup.db"
MAX_PAGE = None  # None 表示抓取全部数据


def get_json_filename(base_url: str) -> str:
    """根据 URL 域名和时间生成 JSON 文件名"""
    domain = urlparse(base_url).netloc
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    return f"{domain}-{timestamp}.json"


def init_db() -> sqlite3.Connection:
    """初始化数据库表"""
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row

    cursor = conn.cursor()

    # 创建用户表
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            email TEXT,
            user_name TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    # 创建提示词表
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS prompts (
            id TEXT PRIMARY KEY,
            title TEXT,
            description TEXT,
            language TEXT,
            code TEXT,
            docs TEXT,
            is_pinned INTEGER,
            user_id TEXT,
            created_at TIMESTAMP,
            updated_at TIMESTAMP,
            favorite INTEGER,
            is_public INTEGER,
            likes_count INTEGER,
            saves_count INTEGER,
            forks_count INTEGER,
            parent_prompt_id TEXT,
            slug TEXT,
            deleted_at TIMESTAMP,
            crawled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )
    """)

    # 创建标签表
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS tags (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE
        )
    """)

    # 创建提示词-标签关联表
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS prompt_tags (
            prompt_id TEXT,
            tag_id INTEGER,
            PRIMARY KEY (prompt_id, tag_id),
            FOREIGN KEY (prompt_id) REFERENCES prompts(id) ON DELETE CASCADE,
            FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
        )
    """)

    conn.commit()
    return conn


def parse_timestamp(ts: Optional[str]) -> Optional[str]:
    """解析时间字符串，返回 ISO 格式字符串"""
    if not ts:
        return None
    try:
        dt = datetime.fromisoformat(ts.replace('Z', '+00:00'))
        return dt.isoformat()
    except (ValueError, AttributeError):
        return None


def prompt_exists(conn: sqlite3.Connection, prompt_id: str) -> bool:
    """检查提示词是否已存在"""
    cursor = conn.cursor()
    cursor.execute("SELECT 1 FROM prompts WHERE id = ?", (prompt_id,))
    return cursor.fetchone() is not None


def get_existing_ids(conn: sqlite3.Connection) -> Set[str]:
    """获取数据库中所有已存在的提示词ID"""
    cursor = conn.cursor()
    cursor.execute("SELECT id FROM prompts")
    return {row[0] for row in cursor.fetchall()}


def save_user(conn: sqlite3.Connection, user: dict) -> None:
    """保存或更新用户信息"""
    cursor = conn.cursor()
    cursor.execute("""
        INSERT OR REPLACE INTO users (id, email, user_name)
        VALUES (?, ?, ?)
    """, (user.get("id"), user.get("email"), user.get("user_name")))


def upsert_tag(conn: sqlite3.Connection, tag_name: str) -> int:
    """插入或获取标签ID"""
    cursor = conn.cursor()
    cursor.execute("""
        INSERT OR IGNORE INTO tags (name) VALUES (?)
    """, (tag_name,))
    if cursor.rowcount == 0:
        cursor.execute("SELECT id FROM tags WHERE name = ?", (tag_name,))
        return cursor.fetchone()[0]
    return cursor.lastrowid


def save_prompt(conn: sqlite3.Connection, prompt: dict) -> None:
    """保存提示词"""
    cursor = conn.cursor()

    # 保存用户
    if prompt.get("user"):
        save_user(conn, prompt["user"])

    # 保存提示词
    cursor.execute("""
        INSERT OR REPLACE INTO prompts (
            id, title, description, language, code, docs,
            is_pinned, user_id, created_at, updated_at,
            favorite, is_public, likes_count, saves_count,
            forks_count, parent_prompt_id, slug, deleted_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        prompt.get("id"),
        prompt.get("title"),
        prompt.get("description"),
        prompt.get("language"),
        prompt.get("code"),
        prompt.get("docs"),
        prompt.get("isPinned", False),
        prompt.get("userId") or prompt.get("user_id"),
        parse_timestamp(prompt.get("createdAt")),
        parse_timestamp(prompt.get("updatedAt")),
        prompt.get("favorite", False),
        prompt.get("is_public", True),
        prompt.get("likes_count", 0),
        prompt.get("saves_count", 0),
        prompt.get("forks_count", 0),
        prompt.get("parent_prompt_id"),
        prompt.get("slug"),
        parse_timestamp(prompt.get("deleted_at"))
    ))

    # 保存标签关联
    if prompt.get("tags"):
        prompt_id = prompt.get("id")
        # 先删除旧的标签关联
        cursor.execute("DELETE FROM prompt_tags WHERE prompt_id = ?", (prompt_id,))
        # 添加新的标签关联
        for tag_name in prompt.get("tags", []):
            tag_id = upsert_tag(conn, tag_name)
            cursor.execute("""
                INSERT OR IGNORE INTO prompt_tags (prompt_id, tag_id)
                VALUES (?, ?)
            """, (prompt_id, tag_id))

    conn.commit()


def fetch_prompts(page: int) -> Optional[Dict]:
    """
    获取指定页数的提示词数据
    返回: {"data": [...], "pagination": {...}} 或 None
    """
    params = {
        "page": page,
        "limit": LIMIT,
        "sort": "most_liked",
        "lang": "zh"
    }

    print(f"正在爬取第 {page} 页...")

    try:
        response = requests.get(BASE_URL, params=params, timeout=10)
        response.raise_for_status()
        data = response.json()
        prompts = data.get("data", [])
        pagination = data.get("pagination", {})
        print(f"  第 {page} 页获取到 {len(prompts)} 条数据 (总页数: {pagination.get('totalPages', '未知')})")
        return {"data": prompts, "pagination": pagination}
    except requests.RequestException as e:
        print(f"  第 {page} 页请求失败: {e}")
        return None


def save_all_to_json(all_prompts: list, base_url: str, total_pages: int, skipped: int) -> str:
    """保存所有数据到单个 JSON 文件"""
    json_filename = get_json_filename(base_url)

    output = {
        "source": base_url,
        "domain": urlparse(base_url).netloc,
        "generated_at": datetime.now().isoformat(),
        "total": len(all_prompts),
        "pages": total_pages,
        "skipped": skipped,
        "data": all_prompts
    }

    with open(json_filename, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    return json_filename


def main():
    """主函数"""
    conn = init_db()

    # 预加载已存在的ID集合
    existing_ids = get_existing_ids(conn)
    print(f"数据库中已有 {len(existing_ids)} 条数据")

    all_prompts = []
    page = 1
    total_pages = 0
    skipped = 0

    while True:
        result = fetch_prompts(page)
        if result is None:
            # 请求失败，停止
            break

        prompts = result["data"]
        pagination = result.get("pagination", {})

        # 获取总页数（第一次请求时）
        if not total_pages and pagination.get("totalPages"):
            total_pages = pagination.get("totalPages")

        # 如果没有数据了，说明已经爬取完毕
        if not prompts:
            print(f"\n第 {page} 页无数据，爬取完成")
            break

        # 过滤并保存数据
        new_count = 0
        duplicate_count = 0

        for prompt in prompts:
            prompt_id = prompt.get("id")
            if prompt_id in existing_ids:
                duplicate_count += 1
                skipped += 1
                continue

            # 保存到数据库和集合
            save_prompt(conn, prompt)
            all_prompts.append(prompt)
            existing_ids.add(prompt_id)
            new_count += 1

        if duplicate_count > 0:
            print(f"  本页新增 {new_count} 条，跳过 {duplicate_count} 条重复数据")

        # 检查是否已达到最大页数或总页数
        if MAX_PAGE and page >= MAX_PAGE:
            print(f"\n已达到最大页数 {MAX_PAGE}，爬取完成")
            break

        if total_pages and page >= total_pages:
            print(f"\n已达到总页数 {total_pages}，爬取完成")
            break

        page += 1
        time.sleep(0.5)

    conn.close()

    # 保存所有数据到单个 JSON 文件
    json_filename = save_all_to_json(all_prompts, BASE_URL, page - 1, skipped)

    print(f"\n爬取完成！获取 {len(all_prompts)} 条新数据，跳过 {skipped} 条重复数据，共 {page - 1} 页")
    print(f"  - SQLite 数据库: {DB_FILE}")
    print(f"  - JSON 文件: {json_filename}")


if __name__ == "__main__":
    main()
