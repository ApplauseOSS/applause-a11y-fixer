/** Ensure image alternative is not repeated as text
 * Axe ID:
 *   image-redundant-alt https://dequeuniversity.com/rules/axe/3.3/image-redundant-alt
 * WCAG:
 *   n/a
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function imageRedundantAltHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    element.setAttribute('alt', '');
  });
}

module.exports = imageRedundantAltHandler;
