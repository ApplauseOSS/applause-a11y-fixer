/** Strips the specified violation attribute from the meta
 * Axe ID:
 *   meta-refresh https://dequeuniversity.com/rules/axe/3.3/meta-refresh
 * WCAG:
 *   3.2.5
 *   2.2.4
 *   2.2.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function metaRefreshHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    const httpEquiv = element.getAttribute('http-equiv');
    if (httpEquiv && httpEquiv.toLowerCase() === 'refresh') {
      element.removeAttribute('http-equiv');
    }
  });
}

module.exports = metaRefreshHandler;
