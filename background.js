chrome.browserAction.onClicked.addEventListener(() => {
    chrome.tabs.executeScript(null, {
        code: "console.log('Wow it works!')"
    });
});