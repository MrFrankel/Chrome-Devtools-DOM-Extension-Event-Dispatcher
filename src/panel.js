(function () {
  function dispatch(selector) {
    let val = document.querySelector(selector).value;
    let query = `__DED__DispatchEvent($0, '${val}')`;
    chrome.devtools.inspectedWindow.eval(query,
      {useContentScriptContext: true});
  }

  function setVal(event) {
    event.target.parentNode.classList.add('selected');

  }

  document.querySelector('#dispatchBtn').addEventListener('click', dispatch.bind(this, '#eventName'));
  document.querySelector('#dispatchCustomBtn').addEventListener('click', dispatch.bind(this, '#customEventName'));
  document.querySelector('#eventName').addEventListener('change', setVal.bind(this))
})();