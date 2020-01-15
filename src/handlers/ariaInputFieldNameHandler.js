const {S, T} = require('../constants/constants');
const uuidv4 = require('uuid/v4');

/** Update the "aria-label" or create a <label> for orphaned "aria-labelledby"
 * for the specified violation node
 * Axe ID:
 *   aria-input-field-name https://dequeuniversity.com/rules/axe/3.3/aria-input-field-name
 * WCAG:
 *   4.1.2
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function ariaInputFieldNameHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    if (element.hasAttribute('aria-label')) {
      element.setAttribute('aria-label', S.CHANGE_ME);
    } else if (element.hasAttribute('aria-labelledby')) {
      const label = dom.window.document.createElement(T.LABEL);
      element.parentNode.insertBefore(label, element);
      label.setAttribute('id', element.getAttribute('aria-labelledby'));
      label.appendChild(dom.window.document.createTextNode(S.CHANGE_ME));
    } else if (element.parentNode.tagName === T.LABEL) {
      const label = element.parentNode;
      let id = label.getAttribute('id');
      if (id === null) {
        id = `${S.CHANGE_ME}_${uuidv4()}`;
        label.setAttribute('id', id);
      }
      element.setAttribute('aria-labelledby', id);
    }
  });
}

module.exports = ariaInputFieldNameHandler;
