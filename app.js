function setFocusColor() {
    // ui
    const colorPicker = document.querySelector('[data-jscolor=""]');

    colorPicker.addEventListener("click", () => {
        watchColorChanges();
    });

}
  
function watchColorChanges() {
    // ui
    const previewLink = document.querySelector('[data-js="preview-link"]');
    // Select the node that will be observed for mutations
    // target: color picker input
    const targetNode = document.querySelector('[data-jscolor=""]');

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true };

    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === "attributes") {
                let currentColor = targetNode.getAttribute(["data-current-color"]);

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
                    }
                `;

                const styleTag = document.createElement("style");
                // add special data attr for FV
                styleTag.setAttribute('data-js', 'focus-visualizer');
            
                if (styleTag.styleSheet) {
            
                    styleTag.styleSheet.cssText = styles;
            
                } else {
            
                    styleTag.appendChild(document.createTextNode(styles));
            
                }

                //@todo: fix this so that the styles block is only added once per hex change
                document.getElementsByTagName("head")[0].appendChild(styleTag);
                
                // update preview link text once color is chosen
                previewLink.textContent = `The focus style appears as a dotted outline set to the color ${currentColor}`
            }
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    // stop observing if color picker loses focus
    //@todo: this isnt working -- need to fix
    if (targetNode.blur()) {
        observer.disconnect();
        console.log('stop observer')
    }
}
  
// lift off 🚀
setFocusColor();
  