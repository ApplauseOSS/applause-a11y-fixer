/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function ariaToggleFieldNameHandler(
  violationNodes,
  dom,
) {
  violationNodes.map((node) => {
    const element = node.element;
    element.removeAttribute('aria-labelledby');
    element.setAttribute('aria-label', 'CHANGE_ME');
  });
}

module.exports = ariaToggleFieldNameHandler;
