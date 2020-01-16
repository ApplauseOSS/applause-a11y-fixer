/** Strips the "aria-hidden" attribute from the specified violation node
 * Axe ID:
 *   aria-hidden-body https://dequeuniversity.com/rules/axe/3.3/aria-hidden-body
 *   aria-hidden-focus https://dequeuniversity.com/rules/axe/3.3/aria-hidden-focus
 * WCAG:
 *   4.1.2
 *   1.3.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function GStripAriaHiddenHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    element.removeAttribute('aria-hidden');
  });
}

module.exports = GStripAriaHiddenHandler;
