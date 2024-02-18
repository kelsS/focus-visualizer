// chrome.browserAction.onClicked.addEventListener(() => {
//     chrome.tabs.executeScript(null, {
//         code: "console.log('Wow it works!')"
//     });
// });

// chrome.runtime.onInstalled.addListener(() => {
//     chrome.tabs.executeScript(null, {
//         code: "console.log('Wow it works!')"
//     });
// });

// chrome.action.onClicked.addListener((tab) => {
//     chrome.tabs.create({url: "https://www.youtube.com"});
//  });
// const extensions = 'https://developer.chrome.com/docs/extensions'
// const webstore = 'https://developer.chrome.com/docs/webstore'

// chrome.runtime.onInstalled.addListener(() => {
//     chrome.action.setBadgeText({
//       text: "OFF",
//     });
// });

// chrome.action.onClicked.addListener(async (tab) => {
//     chrome.scripting.executeScript({
//       target: {tabId: tab.id},
//       files: ['app.js']
//     });
// });

// chrome.runtime.onInstalled.addListener(() => {
//     chrome.action.setBadgeText({
//       text: 'OFF'
//     });
// });
  
// const extensions = 'https://developer.chrome.com/docs/extensions';
// const webstore = 'https://developer.chrome.com/docs/webstore';

// // When the user clicks on the extension action
// chrome.action.onClicked.addListener(async (tab) => {

//         // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
//         const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
//         // Next state will always be the opposite
//         const nextState = prevState === 'ON' ? 'OFF' : 'ON';

//         // Set the action badge to the next state
//         await chrome.action.setBadgeText({
//             tabId: tab.id,
//             text: nextState
//         });

//         if (nextState === 'ON') {
//             // Insert the CSS file when the user turns the extension on
//             await chrome.scripting.insertCSS({
//                 files: ['app.css'],
//                 target: { tabId: tab.id }
//             });
//         } else if (nextState === 'OFF') {
//             // Remove the CSS file when the user turns the extension off
//             await chrome.scripting.removeCSS({
//                 files: ['app.css'],
//                 target: { tabId: tab.id }
//             });
//         }
    
// });
// async function getCurrentTab() {
//     let queryOptions = { active: true, lastFocusedWindow: true };
//     let [tab] = await chrome.tabs.query(queryOptions);
//     console.log(tab);
//     return tab;
// }

function setFocusColor() {
    let currentColor = 'red';

    return currentColor;
    
//     let styles = `
//     button:focus,
//     button:hover,
//     input:focus,
//     input:hover,
//     a:focus,
//     a:hover,
//     [tabindex="0"]:focus,
//     [tabindex="0"]:hover,
//     select:focus,
//     select:hover,
//     textarea:focus,
//     textarea:hover {
//         outline: 5px dotted ${currentColor} !important;
//     }
// `;

//     const styleTag = document.createElement("style");
//     // add special data attr for FV
//     styleTag.setAttribute('data-js', 'focus-visualizer');

//     if (styleTag.styleSheet) {

//         styleTag.styleSheet.cssText = styles;

//     } else {

//         styleTag.appendChild(document.createTextNode(styles));

//     }

//     document.getElementsByTagName("head")[0].appendChild(styleTag);
}
  
// function test() {
//     console.log('this is a popup');
// }

// function getTitle() { return document.title; }

// chrome.action.onClicked.addListener((tab) => {
//     if (!tab.url.includes('chrome://')) {

//       chrome.scripting.executeScript({
//         target: {tabId: getTabId(), allFrames : true},
//         // files : [ 'app.js' ],
//         func: getTitle
//       })
//       .then(injectionResults => {
//         for (const {result} of injectionResults) {
//           console.log(`result:`, result);
//         }
//       });

//     }
// });

// function changeBackgroundColor(backgroundColor) {
//   document.body.style.backgroundColor = backgroundColor;
// }

// chrome.action.onClicked.addListener((tab) => {
//     if (!tab.url.includes('chrome://')) {

//         chrome.scripting.executeScript({
//             target: {tabId: tabs[0],
//             files : [ 'app.js' ],
//             func : changeBackgroundColor,
//             args : [ setFocusColor() ],
//         })
//         .then(() => console.log("injected a function"));

//     }
// });

// async function getCurrentTab() {
//     let queryOptions = { active: true, lastFocusedWindow: true };
//     // `tab` will either be a `tabs.Tab` instance or `undefined`.
//     let [tab] = await chrome.tabs.query(queryOptions);

//     console.log(tab);

//     return tab;
// }

//listens for the event and fires a event to execute content.js
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request === true) {
//       chrome.tabs.query(function (tabs) {
//         chrome.scripting
//           .executeScript({
//             target: { tabId: getCurrentTab() },
//             files: ['content.js'],
//           })
//           .then(() => {
//             console.log('Executed script');
//           });
//       });
//     }
// });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request === true) {
        chrome.action.onClicked.addListener((tab) => {
            if (!tab.url.includes('chrome://')) {
        
                chrome.scripting.executeScript({
                    target: {tabId: tab[0],
                    files : [ 'content.js' ],
                })
                .then(() => console.log("injected a function"));
        
            }
        });
    }
});