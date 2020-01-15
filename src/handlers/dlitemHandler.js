/** Ensures <dt> and <dd> elements are contained by a <dl>
 * Axe ID:
 *   dlitem https://dequeuniversity.com/rules/axe/3.1/dlitem
 * WCAG:
 *   1.3.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function dlitemHandler(
  violationNodes,
  dom,
) {
  const dl = dom.window.document.createElement('dl');
  const first = violationNodes[0].element;
  first.parentNode.insertBefore(dl, first);

  violationNodes.forEach((node) => {
    dl.appendChild(node.element);
  });
}

module.exports = dlitemHandler;
