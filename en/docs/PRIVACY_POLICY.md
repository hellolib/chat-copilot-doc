# Chat Copilot Privacy Policy

**Effective Date:** 2026-01-01

**Last Updated:** 2026-02-12

## Overview

Chat Copilot (hereinafter referred to as "this extension") is committed to protecting your privacy. This Privacy Policy explains how this extension collects, uses, and protects your data. Please read this policy carefully to understand how we handle your information when using this extension.



## 1. Data Storage Location

This extension **stores data only on your local device**. We do not own, operate, or control any external servers.

All user data is stored locally on your device via Chrome's `chrome.storage.local` API. This data is only accessible within the same browser profile and is not uploaded to any servers controlled by us.



## 2. Types of Data Collected

### 2.1 User Settings

We store the following settings to provide a personalized experience:

| Data Type | Description | Required |
|--|-|-|
| Language Preference | Your selected language settings (e.g., English, Chinese, etc.) | No |
| Theme Settings | Interface theme preference (e.g., dark/light mode) | No |
| Quick Access Sites | List of AI platform shortcuts you have enabled | No |
| Floating Button Settings | Floating button display position and behavior preferences | No |
| Sidebar Settings | Prompt sidebar width, display mode, etc. | No |

### 2.2 API Configuration

When you choose to use your own AI model for prompt optimization, we store:

| Data Type | Description | Required |
|--|-|-|
| API Endpoint | API address of the AI service provider you selected | Yes |
| API Key | Key used to access the corresponding AI service | Yes (usually) |
| Model Name | Specific model identifier in use | Yes |
| Other Parameters | Model parameters such as max tokens, temperature, etc. | No |

**Important Note:** Your API key is stored only on your local device. This extension does not send your key to us or any third-party service. The key is used solely for API calls to AI services you have authorized.

### 2.3 Custom Content

Content you create and save:

- **Custom Rules:** Prompt optimization rules you have written
- **Prompts:** Prompts you have favorited or created, along with their categories
- **Tags and Categories:** Custom tags for organizing your prompts

### 2.4 Usage Statistics

To improve user experience, we store:

- Daily usage count
- Total usage count
- Usage frequency of each prompt



## 3. How Data Is Used

### 3.1 Stored Data

- **Local Configuration Storage:** Keep your settings consistent across different sessions
- **Provide Core Functionality:** Use your API configuration to call the corresponding AI service for prompt optimization
- **Personalized Experience:** Adjust the interface and features based on your preferences

### 3.2 Transmitted Data

When you use the prompt optimization feature:

- Your **original prompt** is sent via API request to the AI service provider you have configured
- The optimized prompt is returned by that service and displayed on your interface

**Note:** We do not intercept, record, or analyze the content of these encrypted API communications.



## 4. Third-Party Services

This extension supports connecting to the following third-party AI services:

- OpenAI (`api.openai.com`)
- Anthropic Claude (`api.anthropic.com`)
- Google Gemini (`generativelanguage.googleapis.com`)
- xAI Grok (`api.x.ai`)
- OpenRouter (`openrouter.ai`)
- Ollama (local service, default `localhost:11434`)
- Other custom OpenAI-compatible endpoints

**Important Notes:**

- **Your Configuration:** Whether to use and which AI service to use is entirely your choice
- **Your Keys:** You need to provide your own API keys to use these services
- **Direct Communication:** Data is sent directly from your browser to the corresponding AI service, not through our servers
- **Service Terms:** When using these services, your data is subject to their privacy policies



## 5. Data Sharing and Selling

- **We do not sell your data to any third party.**
- **We do not share your data with any third party.**
- **We do not use your data for advertising targeting or marketing.**

The only data transmission is sending your prompts to the AI service **you have chosen and configured yourself** to complete the prompt optimization feature. The transmitted content is subject to that AI service's privacy policy.



## 6. Data Security

We take the following measures to protect your data:

- **Local Storage:** All sensitive data (such as API keys) is stored only on your local device
- **No Server Collection:** We do not collect any user data to our servers
- **Encrypted Transmission:** API communications are encrypted via HTTPS
- **Local Validation:** Custom rules are validated client-side to prevent potential security risks

Measures you can take for data security:

- **Protect Your Device:** Please ensure your device is set with a lock screen password
- **Secure Browser:** Keep Chrome browser updated to the latest version
- **Keep Keys Safe:** Do not share your API keys with others



## 7. Data Access and Control

### 7.1 Accessing Your Data

You can access and manage your data by:

1. Open the Chrome extensions management page (`chrome://extensions`)
2. Find the Chat Copilot extension
3. Click "Details"
4. View and modify your settings under "Extension Options"

### 7.2 Deleting Your Data

To completely delete all data stored by this extension:

1. Remove the Chat Copilot extension in Chrome
2. Or select "Clear browsing data" option when removing the extension
3. Or select clearing "Extension data" in `chrome://settings/clearBrowserData`

**Note:** After removing the extension, all locally stored data will be permanently deleted.



## 8. Website Access Permissions

The reason this extension requests `<all_urls>` permission is:

- **Content Script Injection:** We need to inject optimization buttons and features on pages of various AI platforms (such as ChatGPT, Claude, etc.)
- **Platform Adaptation:** Different AI platforms have different domains and page structures

**We promise:**
- Not to access or read any web page content unrelated to functionality
- Not to collect your browsing history, passwords, or sensitive information
- All injected code only triggers when you actively use the features



## 9. Children's Privacy

This extension is not directed at children under 13 years of age. We do not knowingly collect personal information from children. If we discover that we have inadvertently collected information from children, we will delete it immediately.



## 10. Changes to Privacy Policy

We may update this Privacy Policy from time to time. When making significant changes, we will notify you in the extension description or update notes. Please review this policy regularly for the latest information.



## 11. Contact Us

If you have any questions or concerns about this Privacy Policy, or wish to exercise your data rights, please contact us via:

**Email:** [Your Email Address]

**GitHub Issues:** [Your Project URL]

We will respond to your inquiries within a reasonable time.



#git # Appendix: Chrome Storage Description

The `chrome.storage.local` API used by this extension has the following characteristics:

- Storage capacity limit is approximately 5MB (depending on browser settings)
- Data is bound to your Chrome user profile
- Data persists after the browser is closed
- Sync functionality requires additional `storage.sync` permission (this extension does not use it)
- Data can be deleted using the browser's "Clear browsing data" feature
