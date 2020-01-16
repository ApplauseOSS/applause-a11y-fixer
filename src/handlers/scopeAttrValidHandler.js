const {S} = require('../constants/constants');

/** Ensures the scope attribute is used correctly on tables
 * Axe ID:
 *   scope-attr-valid https://dequeuniversity.com/rules/axe/3.3/scope-attr-valid
 * WCAG:
 *   n/a
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function scopeAttrValidHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    node.element.setAttribute('scope', S.CHANGE_ME);
  });
}

module.exports = scopeAttrValidHandler;
