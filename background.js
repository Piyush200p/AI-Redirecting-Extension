chrome.webNavigation.onCompleted.addListener(async (details) => {
  const url = new URL(details.url);
  const queryParam = url.searchParams.get("q");

  if (!queryParam) return;
  const trimmedQuery = queryParam.trim().toLowerCase();

  // ChatGPT
  if (trimmedQuery.endsWith(".chatgpt")) {
          const prompt = trimmedQuery.replace(".chatgpt", "").trim();
          chrome.tabs.update(details.tabId, {
            url: `https://chat.openai.com/?q=${encodeURIComponent(prompt)}`
          });
  }

  // Copilot
  if (trimmedQuery.endsWith(".copilot")) {
          const prompt = trimmedQuery.replace(".copilot", "").trim();
          chrome.tabs.update(details.tabId, {
            url: `https://copilot.microsoft.com/?q=${encodeURIComponent(prompt)}`
          });
        }

  // Perplexity
  else if (trimmedQuery.endsWith(".perplexity")) {
    const prompt = trimmedQuery.replace(".perplexity", "").trim();
    chrome.tabs.update(details.tabId, {
      url: `https://www.perplexity.ai/search?q=${encodeURIComponent(prompt)}`
    });
  }

  // Gemini
  else if (trimmedQuery.endsWith(".gemini")) {
    const prompt = trimmedQuery.replace(".gemini", "").trim();
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

// Claude AI
else if (trimmedQuery.endsWith(".claude")) {
  const prompt = trimmedQuery.replace(".claude", "").trim();

  chrome.storage.local.set({ claudePrompt: prompt }, () => {
    chrome.tabs.update(details.tabId, {
      url: "https://claude.ai"
    });

    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "Claude Redirect",
      message: "Opening Claude... your prompt will be copied automatically."
    });
  });
}

  // ImageAI (Bing Image Creator)
else if (trimmedQuery.endsWith(".imageai")) {
  const prompt = trimmedQuery.replace(".imageai", "").trim();

  chrome.storage.local.set({ imagePrompt: prompt }, () => {
    chrome.tabs.update(details.tabId, {
      url: "https://www.bing.com/images/create"
    });
 
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "Image Generator",
      message: "Opening Bing Image Creator. Your prompt will be copied."
    });
  });
}


}, { url: [{ hostContains: "google.com" }] });
