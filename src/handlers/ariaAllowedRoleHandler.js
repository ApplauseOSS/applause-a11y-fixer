const {S} = require('../constants/constants');

/** Ensures role attribute has an appropriate value for the element
 * Axe ID:
 *   aria-allowed-role https://dequeuniversity.com/rules/axe/3.3/aria-allowed-role
 * WCAG:
 *   n/a
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function ariaAllowedRoleHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    node.element.setAttribute('role', S.CHANGE_ME);
  });
}

module.exports = ariaAllowedRoleHandler;
