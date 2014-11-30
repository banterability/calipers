chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.insertCSS({
    file: 'viewport.css'
  });
});
