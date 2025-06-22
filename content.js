chrome.storage.local.get(["imagePrompt", "geminiPrompt", "claudePrompt"], (data) => {
  const prompt = data.imagePrompt || data.geminiPrompt || data.claudePrompt;
  if (prompt) {
    navigator.clipboard.writeText(prompt).then(() => {
      console.log("Prompt copied to clipboard:", prompt);
    }).catch((err) => {
      console.error("Clipboard copy failed:", err);
    });

    chrome.storage.local.remove("imagePrompt");
    chrome.storage.local.remove("geminiPrompt");
    chrome.storage.local.remove("claudePrompt");
  }
});
