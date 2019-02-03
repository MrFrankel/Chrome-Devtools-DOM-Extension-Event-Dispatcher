
function __DED__DispatchEvent(el, event) {
 el.dispatchEvent(new Event(event, {bubbles:true}));
}