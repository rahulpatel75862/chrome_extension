document.addEventListener("DOMContentLoaded", function () {
    const getButton = document.getElementById("getButton");
    const tabTitleElement = document.getElementById("TabTittle");
  
    getButton.addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tab = tabs[0];
        const TabTitle = tab.title;
        tabTitleElement.textContent = "Current Tab Title: " + TabTitle;
      });
    });
  });