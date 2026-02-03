---
title: Getting Started
date: 2025-01-20
---

## Installation

### Option 1: Chrome Web Store (Recommended)

1. Visit [Chrome Web Store](https://chromewebstore.google.com/detail/chat-copilot/ignafelbdjojmmofofhldldpgkceflal)
2. Click the "Add to Chrome" button
3. Click "Add extension" in the confirmation dialog
4. Installation complete, you will see the feature entry on supported AI platform pages

### Option 2: GitHub Releases Download

1. Visit the [GitHub Releases](https://github.com/hellolib/chat-copilot/releases) page
2. Download the latest version zip file
3. Extract the downloaded file
4. Open Chrome browser and visit `chrome://extensions/`
5. Enable "Developer mode" in the top right corner
6. Click "Load unpacked"
7. Select the extracted folder

### Option 3: Developer Mode Installation

#### 1. Clone Repository

```bash
git clone https://github.com/hellolib/chat-copilot.git
cd chat-copilot
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Build Project

```bash
npm run build
```

#### 4. Load Extension

1. Open Chrome browser and visit `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked"
4. Select the `build/chat-copilot` folder in the project root directory

After installation, you will see the feature entry on supported AI platform pages.

![Installation Complete](/1.png)

## How to Use

1. Open any supported AI conversation platform (such as ChatGPT, Claude, etc.)
2. Type your prompt in the input box
3. Click the Chat Copilot icon or use the shortcut key to trigger optimization
4. Preview the optimized prompt, click apply to use the optimized prompt

![Prompt Optimization](/2.png)
