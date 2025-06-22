# 🔗 AI Redirector – Smart AI Launcher from the Search Bar

**AI Redirector** is a lightweight Chrome extension that lets you type search queries with smart suffixes (like `.chatgpt`, `.claude`, `.imageai`, etc.) directly in your address bar — and it instantly redirects you to the right AI platform, carrying your prompt with you.

## ✨ Features

- 🌐 Use suffixes like `.chatgpt`, `.claude`, `.gemini`, `.imageai`, `.perplexity`
- 📋 Auto-copy prompt to clipboard for fast pasting
- ⚡ Quick redirection to AI tools: ChatGPT, Claude, Gemini, Copilot, Perplexity, and more
- 💡 Lightweight, no background bloat
- 🔒 Privacy-first: all processing is local, no data sent anywhere

## 🚀 Supported AI Platforms

| Suffix        | Redirects To                            | Prompt Auto-Copy | Auto-Fill Supported |
|---------------|------------------------------------------|------------------|----------------------|
| `.chatgpt`    | [ChatGPT](https://chat.openai.com)       | ✅ Yes            | ❌ No (clipboard only) |
| `.claude`     | [Claude](https://claude.ai)              | ✅ Yes            | ❌ No |
| `.gemini`     | [Gemini](https://gemini.google.com)      | ✅ Yes            | ❌ No |
| `.copilot`    | [Microsoft Copilot](https://copilot.microsoft.com) | ✅ Yes | ❌ No |
| `.perplexity` | [Perplexity](https://www.perplexity.ai)  | ✅ Yes            | ✅ Yes (via URL) |
| `.imageai`    | [Bing Image Creator](https://www.bing.com/images/create) | ✅ Yes | ❌ No |

## 🔧 How to Use

1. Type a search query in the browser like:
2. The extension redirects you to ChatGPT and copies the prompt.
3. Paste the prompt (`Ctrl+V`) and hit send.

## 🛠 Installation

1. Clone or download this repository.
2. Go to `chrome://extensions` in your browser.
3. Enable **Developer Mode** (top right).
4. Click **Load Unpacked** and select the extension folder.

## 🧠 How It Works

The extension monitors your search bar input using `chrome.webNavigation` and:
- Parses the query suffix (e.g. `.claude`)
- Saves the prompt in `chrome.storage.local`
- Redirects to the appropriate AI platform
- Injects a content script to copy the prompt to the clipboard

## 📁 Project Structure


## 🛡️ Permissions

This extension requests access only to the following domains:
- `chat.openai.com`
- `claude.ai`
- `gemini.google.com`
- `copilot.microsoft.com`
- `www.perplexity.ai`
- `bing.com/images/create`

All logic runs locally. No user data is tracked, stored, or shared.

## 💬 Future Plans

- [ ] Popup UI for selecting favorite AIs
- [ ] User-defined suffixes
- [ ] Dark/light theme toggling for popup
- [ ] Multi-browser support (Firefox, Edge)

## 🧑‍🎓 Built By

This project was built by a passionate second-year student exploring the intersection of AI and user-friendly tools.

If you use it, star ⭐ the repo or contribute!

## 📄 License

MIT License – Free for personal and educational use.
