/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function imageRedundantAltHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    element.setAttribute('alt', '');
  });
}

module.exports = imageRedundantAltHandler;
