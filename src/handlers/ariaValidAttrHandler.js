/**
 * Strip out _any_ invalid "aria" attributes for the specified violation node
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function ariaValidAttrHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node['element'];
    for (const invalidAttribute of node['any'][0]['data']) {
      element.removeAttribute(invalidAttribute);
    }
  });
}

module.exports = ariaValidAttrHandler;
