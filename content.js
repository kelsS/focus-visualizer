chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    const head = document.querySelector('head');

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
        outline: 5px dotted ${request.message} !important; 
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

  console.log(`Outline color set to: ${request.message}`);
  
  return true;
});
