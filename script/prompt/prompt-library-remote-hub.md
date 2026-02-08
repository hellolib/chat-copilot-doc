# 提示词广场动态配置方案

## 目标
- 官方提示词库由团队维护。
- 用户可新增本地自定义提示词；**本地内容不覆盖、不替换官方内容**，且不提供“覆盖/禁用官方提示词”的入口。
- 不依赖自建后端，使用免费托管。
- 为未来多语言提示词预留能力。
- 启动时检查更新（含缓存与回退）。
- 页面内置少量高质量默认提示词，保证首次使用体验。

## 仓库与托管
- 仓库名：`chat-copilot-library`（独立仓库）。
- 双源托管以增强可用性：
  1) **主源**：GitHub Releases（稳定、可版本化）
  2) **备源**：Gitee Releases（更友好于国内网络）
- 每次发布都提供相同的 `library.json`。
- 可选：后续如需可加 jsDelivr 作为第三备源。

## JSON Schema（v1）
该结构面向多语言与“本地仅追加、不覆盖”的要求。

```json
{
  "schemaVersion": "1.0",
  "version": "2026.02.01",
  "updatedAt": "2026-02-01",
  "defaultLocale": "zh-CN",
  "supportedLocales": ["zh-CN", "en-US"],
  "categories": [
    {
      "id": "writing",
      "order": 10,
      "i18n": {
        "zh-CN": {"name": "写作", "description": "文章、文案、邮件"},
        "en-US": {"name": "Writing", "description": "Articles, copy, email"}
      },
      "prompts": [
        {
          "id": "writing-summary-001",
          "order": 10,
          "i18n": {
            "zh-CN": {
              "title": "摘要提炼",
              "description": "将内容提炼为要点摘要",
              "content": "请将以下内容提炼为要点摘要：\n\n{{input}}"
            },
            "en-US": {
              "title": "Summarize",
              "description": "Condense text into key bullet points",
              "content": "Summarize the following text into key points:\n\n{{input}}"
            }
          },
          "tags": ["summary", "writing"],
          "enabled": true,
          "updatedAt": "2026-01-20"
        }
      ]
    }
  ]
}
```

### Schema 说明
- `i18n` 在分类与提示词层级都存在，用于同一文件内多语言。
- `defaultLocale` 用于目标语言缺失时的回退。
- 提示词 `id` 必须稳定；本地自定义不会替换官方 `id`。
- 提示词 `description` 用于列表展示的简要说明，可选但建议填写。

## 本地自定义提示词（用户数据）
仅存储在 `chrome.storage`。

```json
{
  "customPrompts": [
    {
      "id": "custom-001",
      "categoryId": "writing",
      "order": 1000,
      "title": "我的本地提示词",
      "description": "改写输入内容的本地模板",
      "content": "请帮我改写以下内容：\n\n{{input}}",
      "tags": ["custom"],
      "enabled": true,
      "createdAt": "2026-02-01"
    }
  ]
}
```

### 本地合并规则
- 先加载官方内容。
- 本地提示词按 `categoryId` **仅追加**到目标分类。
- 若 `categoryId` 不存在，则自动归入“我的提示词”分类。
- 不允许覆盖：如 `id` 冲突，**本地提示词改名**（如 `custom-001-1`）。

## 启动更新流程
1) 从 `chrome.storage` 读取缓存的官方库。
2) 拉取 GitHub Release 的 `library.json`。
3) 失败则尝试 Gitee Release。
4) 都失败则使用缓存；若无缓存则用内置默认。
5) 合并本地自定义提示词并渲染。

## 何时需要更新插件
- **无需更新插件**：仅变更提示词库内容（分类、标题、提示词文案、排序、启用/停用等），发布新的 `library.json` 即可生效。
- **需要更新插件**：涉及解析逻辑、合并规则、UI 交互、缓存策略、数据结构变更（如 schema 版本升级）等代码级改动。

## 缓存与更新策略
- 在 `chrome.storage.local` 存储 `{version, updatedAt, lastFetchAt, data}`。
- 当前仅展示 100–200 条提示词时可不强制申请 `unlimitedStorage`；若未来扩容至更大规模再启用。
- 版本比较以 `version`（YYYY.MM.DD）为准；`updatedAt` 仅用于展示。
- 每次启动检查，若 `lastFetchAt` 在固定 TTL（如 12 小时）内则跳过远程拉取；加入 0–2 小时随机抖动以分散请求。
- 支持条件请求（ETag / If-Modified-Since）以减少流量与提高一致性。
- 可在设置页提供“刷新提示词库”按钮（可选）。

## 文件命名与发布规范
- Release tag：`library-vYYYY.MM.DD`（如 `library-v2026.02.01`）。
- 资源文件名：`library.json`。
- 建议同发 `library.json.sha256`，客户端校验完整性。
- 双源内容保持一致，确保行为一致。

## 分批次下载（按大小拆分，可选）
当前仅展示 100–200 条提示词时可先不分片；若库体积达到 2–3 MB，再按大小拆分并保留同仓库同 Release 发布方式。

### 仓库文件结构建议
- 索引：`library-index.json`
- 分片：`library-part-001.json`, `library-part-002.json`, `library-part-003.json` ...
- 校验：`library-part-001.json.sha256`（可选但推荐）

### 索引文件示例
```json
{
  "schemaVersion": "1.0",
  "version": "2026.02.01",
  "updatedAt": "2026-02-01",
  "parts": [
    {
      "file": "library-part-001.json",
      "sha256": "abc123...",
      "size": 1048576,
      "updatedAt": "2026-02-01",
      "categoryIds": ["writing", "translation"]
    },
    {
      "file": "library-part-002.json",
      "sha256": "def456...",
      "size": 1048576,
      "updatedAt": "2026-02-01",
      "categoryIds": ["dev", "productivity"]
    }
  ]
}
```

### 客户端拉取流程（简述）
1) 启动先拉 `library-index.json`（带 ETag/If-Modified-Since）。
2) 对比本地缓存的 `version`/`sha256`，仅下载变更分片。
3) 分片校验通过后合并为官方库，再合并本地自定义提示词。

### 并发与性能建议（分片下载场景）
- 下载尽量放在 background service worker（或 offscreen）执行，避免阻塞 UI 页面。
- 控制并发为 2–4；弱网或性能差设备可降到 1–2。
- UI 先渲染缓存内容，下载完成后再异步刷新。
- 合并分片时避免频繁写 storage，可批量合并后一次写入。

### 重试与退避策略（分片下载场景）
- 分片下载失败时可重试 2–3 次，采用指数退避（例如 1s/3s/9s）并加 0–500ms 抖动。
- 若同一分片连续失败，记录失败时间并跳过一段冷却期（如 6–12 小时）以避免死循环。
- 只要缓存可用，UI 不阻塞；后台重试即可。

### 分片大小建议（分片下载场景）
- 推荐单片 0.5–1.5 MB；弱网更偏小，减少单次失败成本。
- 分片过小会增加 HTTP 连接与调度成本，建议总分片数控制在 5–20 之间。

## 分批次下载（按分类拆分，计划）
后续如需更细粒度更新，可按分类拆分为多个文件，通过索引统一调度。
- 索引：`library-index.json`
- 分类文件：`categories/<categoryId>.json`
- 每个分类文件有独立 `sha256` 与 `updatedAt`

## 未来扩展
- 仅在需要时再增加分类外的 `prompts` 层级，v1 保持简单。
- 可增加 `deprecated: true` 用于隐藏旧提示词而不删除。
- 语言扩展后可加入 `localeFallbacks`（如 `zh` → `zh-CN`）。
