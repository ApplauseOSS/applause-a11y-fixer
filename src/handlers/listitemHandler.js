/** Wraps the specified violation node value with a `ul`
 * Axe ID:
 *   listitem https://dequeuniversity.com/rules/axe/3.0/listitem
 * WCAG:
 *   1.3.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function listItemHandler(
  violationNodes,
  dom,
) {
  const elements = violationNodes.map((node) => node.element);
  const first = elements[0];

  const ul = dom.window.document.createElement('ul');
  first.parentNode.insertBefore(ul, first);

  elements.forEach((element) => ul.appendChild(element));
}

module.exports = listItemHandler;
