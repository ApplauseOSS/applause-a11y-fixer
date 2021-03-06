const {S, T, SubNodeType, SelectorType} = require('../constants/constants');
const {getRelated} = require('../utils/handlerUtils');

/** Landmarks must have a unique role or role/label/title (i.e. accessible name) combination
 * Axe ID:
 *   landmark-unique https://dequeuniversity.com/rules/axe/3.3/landmark-unique
 * WCAG:
 *   n/a
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function landmarkUniqueHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const relatedElements = getRelated(node, SelectorType.ANY, SubNodeType.ELEMENTS);

    relatedElements.forEach((element, index) => {
      const ariaLabel = element.getAttribute('aria-label');
      const ariaLabeledBy = element.getAttribute('aria-labelledby');
      if (ariaLabel) {
        element.setAttribute('aria-label', `${ariaLabel}_${index}`);
      } else if (ariaLabeledBy) {
        let target = dom.window.document.getElementById(ariaLabeledBy);
        if (!target) {
          target = dom.window.document.createElement(T.DIV);
          element.before(target);
        }
        target.appendChild(dom.window.document.createTextNode(`${S.CHANGE_ME}_${index}`));
      } else {
        element.setAttribute('aria-label', `${S.CHANGE_ME}_${index}`);
      }
    });
  });
}

module.exports = landmarkUniqueHandler;
