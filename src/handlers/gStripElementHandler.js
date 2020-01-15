/** Strips the specified violation node from the dom
 * Axe ID:
 *   blink https://dequeuniversity.com/rules/axe/2.6/blink
 *   marquee https://dequeuniversity.com/rules/axe/3.3/marquee
 *   meta-refresh https://dequeuniversity.com/rules/axe/3.3/meta-refresh
 * WCAG:
 *   3.2.5
 *   2.2.4
 *   2.2.2
 *   2.2.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function GStripElementHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    element.remove();
  });
}

module.exports = GStripElementHandler;
