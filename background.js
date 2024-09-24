chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.startsWith('https://autoclose.me')) {
        chrome.tabs.remove(tabId);
    }
});