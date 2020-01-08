/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function ariaValidAttrValueHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node['element'];

    const invalidValueAttrs = node['all'].reduce((invalidValueAttrs, related) => {
      return invalidValueAttrs.concat(related['data']);
    }, []);

    invalidValueAttrs.forEach((attr) => {
      const attrName = attr.split('=')[0];
      const attrValue = element.getAttribute(attrName);
      const newValue = `INVALID_${attrValue}`;
      element.setAttribute(attrName, newValue);
    });
  });
}

module.exports = ariaValidAttrValueHandler;
