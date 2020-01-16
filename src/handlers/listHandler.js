const {SubNodeType, SelectorType} = require('../constants/constants');
const {getRelated} = require('../utils/handlerUtils');

/** Ensures that lists are structured correctly
 * Axe ID:
 *   list https://dequeuniversity.com/rules/axe/3.0/list
 * WCAG:
 *   1.3.1
 * Wraps the specified violation node value with a `li`
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function listHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const relatedElements = getRelated(node, SelectorType.NONE, SubNodeType.ELEMENTS);
    relatedElements.forEach((element) => {
      const li = dom.window.document.createElement('li');
      element.before(li);
      li.appendChild(element);
    });
  });
}

module.exports = listHandler;
