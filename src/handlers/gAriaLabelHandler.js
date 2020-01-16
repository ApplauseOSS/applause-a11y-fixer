const {S} = require('../constants/constants');

/** Replaces the "aria-label" attribute of the specified violation node
 * Axe ID:
 *   object-alt https://dequeuniversity.com/rules/axe/3.0/object-alt
 *   role-img-alt https://dequeuniversity.com/rules/axe/3.3/role-img-alt
 * WCAG:
 *   1.1.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function gAriaLabelHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    element.setAttribute('aria-label', S.CHANGE_ME);
  });
}

module.exports = gAriaLabelHandler;
