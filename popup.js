// function setFocusColorPreview() {
//     // ui
//     const colorPicker = document.querySelector('[data-jscolor]');

//     colorPicker.addEventListener('blur', () => {

//         watchColorChanges();

//     });

// }
  
// function watchColorChanges() {
//     // ui
//     const previewLink = document.querySelector('[data-js="preview-link"]');
//     // Select the node that will be observed for changes
//     // target: color picker input
//     const targetNode = document.querySelector('[data-jscolor]');
//     const head = document.getElementsByTagName("head")[0];

//     let currentColor = targetNode.getAttribute(["data-current-color"]);

//     let styles = `
//         button:focus,
//         button:hover,
//         input:focus,
//         input:hover,
//         a:focus,
//         a:hover,
//         [tabindex="0"]:focus,
//         [tabindex="0"]:hover,
//         select:focus,
//         select:hover,
//         textarea:focus,
//         textarea:hover {
//             outline: 5px dotted ${currentColor} !important;
//         }
//     `;

//     const styleTag = document.createElement("style");
//     // add special data attr for FV
//     styleTag.setAttribute('data-js', 'focus-visualizer');

//     if (styleTag.styleSheet) {

//         styleTag.styleSheet.cssText = styles;

//     } else {

//         styleTag.appendChild(document.createTextNode(styles));

//     }
    
    
//     head.appendChild(styleTag);
    
//     // update preview link text once color is chosen
//     previewLink.textContent = `The focus style appears as a dotted outline set to the color ${currentColor}`

// }
  

// wait for page to load
// document.addEventListener("DOMContentLoaded", () => {
//     // lift off 🚀
//     // setFocusColorPreview();
// });

document.addEventListener('DOMContentLoaded', function () {
    const replaceButton = document.querySelector('#replace-button');

    console.log(replaceButton);

    replaceButton.addEventListener('click', function () {
        chrome.runtime.sendMessage(true);
        console.log('test');
    });
});