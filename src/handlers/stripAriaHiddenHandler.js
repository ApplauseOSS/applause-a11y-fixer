/**
 * Strips the "aria-hidden" attribute from the specified violation node
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function stripAriaHiddenHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node['element'];
    element.removeAttribute('aria-hidden');
  });
}

module.exports = stripAriaHiddenHandler;
