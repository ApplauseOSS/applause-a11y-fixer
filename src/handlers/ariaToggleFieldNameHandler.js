const {S} = require('../constants/constants');

/** Ensures every ARIA toggle field has an accessible name
 * Axe ID:
 *   aria-toggle-field-name https://dequeuniversity.com/rules/axe/3.3/aria-toggle-field-label
 * WCAG:
 *   4.1.2
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function ariaToggleFieldNameHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    element.removeAttribute('aria-labelledby');
    element.setAttribute('aria-label', S.CHANGE_ME);
  });
}

module.exports = ariaToggleFieldNameHandler;
