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

    const invalidAttrs = node['any'].reduce((invalidAttrs, related) => {
      return invalidAttrs.concat(related['data']);
    }, []);

    invalidAttrs.forEach((attr) => element.removeAttribute(attr));
  });
}

module.exports = ariaValidAttrHandler;
