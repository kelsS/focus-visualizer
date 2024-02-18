const colorPicker = document.querySelector('[data-jscolor]');

function watchColorChanges() {
    // ui
    const previewLink = document.querySelector('[data-js="preview-link"]');
    // Select the node that will be observed for changes
    const head = document.querySelector('head');

    let currentColor = colorPicker.getAttribute(["data-current-color"]);

    let styles = `
        button:focus,
        button:hover,
        input:focus,
        input:hover,
        a:focus,
        a:hover,
        [tabindex="0"]:focus,
        [tabindex="0"]:hover,
        select:focus,
        select:hover,
        textarea:focus,
        textarea:hover {
            outline: 5px dotted ${currentColor} !important; 
            outline-offset: 5px !important;
        }
    `;

    const styleTag = document.createElement("style");

    // add special data attr for FV
    styleTag.classList.add('focusvis--styles')

    if (styleTag.styleSheet) {

        styleTag.styleSheet.cssText = styles;

    } else {

        styleTag.appendChild(document.createTextNode(styles));

    }
    
    
    head.appendChild(styleTag);
    
    // update preview link text once color is chosen
    previewLink.textContent = `The focus style appears as a dotted outline set to the color ${currentColor}`; 

    return currentColor;

}

// wait for page to load
document.addEventListener("DOMContentLoaded", () => {
    // lift off 🚀
    colorPicker.addEventListener('blur', () => {
        let currentColor;

        currentColor = watchColorChanges();

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { message: `${currentColor}`});

        });

        console.log(`${currentColor} sent to content script`);
        
        return true;
    });

        
});