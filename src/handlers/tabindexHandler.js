/** Ensures tabindex attribute values are not greater than 0
 * Axe ID:
 *   tabindex https://dequeuniversity.com/rules/axe/3.2/tabindex
 * WCAG:
 *   n/a
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function tabindexHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    element.setAttribute('tabindex', '0');
  });
}

module.exports = tabindexHandler;
