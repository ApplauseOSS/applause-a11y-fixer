/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function inputLabelHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    const label = dom.window.document.createElement('label');
    label.setAttribute('for', element.getAttribute('id'));
    label.innerHTML = 'CHANGE_ME';
    element.parentNode.insertBefore(label, element);
  });
}

module.exports = inputLabelHandler;
