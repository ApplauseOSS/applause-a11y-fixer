const {S} = require('../constants/constants');

/** ARIA roles used must conform to valid values
 * Axe ID:
 *   aria-roles https://dequeuniversity.com/rules/axe/3.0/aria-roles
 * WCAG:
 *   4.1.2
 *   4.1.1
 *   1.3.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function ariaRolesHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    element.setAttribute('role', S.CHANGE_ME);
  });
}

module.exports = ariaRolesHandler;
