chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.insertCSS({
    file: 'viewport.css'
  });
  chrome.tabs.executeScript({
    file: 'viewport.js'
  });
});
