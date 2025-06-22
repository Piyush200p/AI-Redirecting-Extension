chrome.webNavigation.onCompleted.addListener((details) => {
  chrome.tabs.get(details.tabId, (tab) => {
    if (!tab || !tab.url) return;

    const url = new URL(tab.url);

    // Check if it's a Google Search
    if (url.hostname === "www.google.com" && url.pathname === "/search") {
      const query = new URLSearchParams(url.search).get("q");

      if (query) {
        const trimmedQuery = query.trim();

        if (trimmedQuery.endsWith(".chatgpt")) {
          const prompt = trimmedQuery.replace(".chatgpt", "").trim();
          chrome.tabs.update(details.tabId, {
            url: `https://chat.openai.com/?q=${encodeURIComponent(prompt)}`
          });
        }

        if (trimmedQuery.endsWith(".copilot")) {
          const prompt = trimmedQuery.replace(".copilot", "").trim();
          chrome.tabs.update(details.tabId, {
            url: `https://copilot.microsoft.com/?q=${encodeURIComponent(prompt)}`
          });
        }

        if (trimmedQuery.endsWith(".gemini")) {
  const prompt = trimmedQuery.replace(".gemini", "").trim();

  // Save to storage
  chrome.storage.local.set({ geminiPrompt: prompt }, () => {
    chrome.tabs.update(details.tabId, {
      url: "https://gemini.google.com/app"
    });

    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "Gemini Redirect",
      message: "Opening Gemini... your prompt will be copied automatically."
    });
  });
}


        if (trimmedQuery.endsWith(".perplexity")) {
          const prompt = trimmedQuery.replace(".perplexity", "").trim();
          chrome.tabs.update(details.tabId, {
            url: `https://www.perplexity.ai/search?q=${encodeURIComponent(prompt)}`
          });
        }
      }
    }
  });
}, {
  url: [{ urlMatches: "https://www.google.com/search*" }]
});
