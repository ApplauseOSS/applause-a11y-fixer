/**
 * Strips the specified violation node from the dom
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function stripElementHandler(
  violationNodes,
  dom,
) {
  violationNodes.map((node) => {
    const element = node['element'];
    element.remove();
  });
}

module.exports = stripElementHandler;
