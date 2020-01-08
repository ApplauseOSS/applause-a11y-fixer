/**
 * Add any aria attributes that are additionally required for the violation node
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function ariaRequiredAttrHandler(
  violationNodes,
  dom,
) {
  violationNodes.map((node) => {
    const element = node.element;

    const missingAttrs = node['any'].reduce((missingAttrs, related) => {
      return missingAttrs.concat(related['data']);
    }, []);

    missingAttrs.forEach((attr) => {
      element.setAttribute(attr, 'CHANGE_ME');
    });
  });
}

module.exports = ariaRequiredAttrHandler;
