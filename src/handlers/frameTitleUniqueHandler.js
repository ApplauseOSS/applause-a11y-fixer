/** Ensures <iframe> and <frame> elements contain a unique title attribute
 * Axe ID:
 *   frame-title-unique https://dequeuniversity.com/rules/axe/3.3/frame-title-unique
 * WCAG:
 *   n/a
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function frameTitleUniqueHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node, index) => {
    const element = node.element;
    const title = element.getAttribute('title');
    element.setAttribute('title', `${title} ${index}`);
  });
}

module.exports = frameTitleUniqueHandler;
