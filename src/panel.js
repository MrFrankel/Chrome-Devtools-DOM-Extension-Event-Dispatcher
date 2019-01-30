(function () {
  function dispatch(selector) {
    let val = document.querySelector(selector).value;
    let query = `setSelectedElement($0, '${val}')`;
    chrome.devtools.inspectedWindow.eval(query,
      {useContentScriptContext: true});
  }

  document.querySelector('#dispatchBtn').addEventListener('click', dispatch.bind(this, '#eventName'));
  document.querySelector('#dispatchCustomBtn').addEventListener('click', dispatch.bind(this, '#customEventName'));
})()