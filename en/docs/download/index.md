---
title: Install Extension
date: 2026-02-08
---

## Method 1: Chrome Web Store

1. Visit [Chrome Web Store](https://chromewebstore.google.com/detail/chat-copilot/ignafelbdjojmmofofhldldpgkceflal)
2. Click "Add to Chrome"
3. Click "Add extension" in the confirmation dialog

## Method 2: Direct CRX Download

1. Download: [ChatCopilot-0.17.1.crx](/release-crx/ChatCopilot-0.17.1.crx)
2. Open Chrome and visit `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Drag the downloaded `.crx` file into the extensions page
5. Click "Add extension" in the confirmation dialog

## Method 3: GitHub Releases

1. Visit the [GitHub Releases](https://github.com/hellolib/chat-copilot/releases) page
2. Download the latest zip file
3. Extract it and load it using the steps below
4. Open Chrome and visit `chrome://extensions/`
5. Enable "Developer mode" in the top right
6. Click "Load unpacked"
7. Select the extracted folder

## Method 4: Developer Mode (Unpacked)

1. Open Chrome and visit `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked"
4. Select the extracted folder

## Method 5: Build From Source

1. Clone the repo: `git clone https://github.com/hellolib/chat-copilot.git`
2. Enter the directory: `cd chat-copilot`
3. Install dependencies: `npm install`
4. Build the project: `npm run build`
5. Open Chrome and visit `chrome://extensions/`
6. Enable "Developer mode" in the top right
7. Click "Load unpacked"
8. Select the `build/chat-copilot` folder in the project root
