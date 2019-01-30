
function setSelectedElement(el, event) {
 el.dispatchEvent(new Event(event, {bubbles:true}));
}