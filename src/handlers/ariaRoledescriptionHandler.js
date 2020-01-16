/** Update the "aria-roledescription" for the specified violation node
 * Axe ID:
 *   aria-roledescription https://dequeuniversity.com/rules/axe/3.4/aria-roledescription
 * WCAG:
 *   4.1.2
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function ariaRoledescriptionHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    node.element.removeAttribute('aria-roledescription');
  });
}

module.exports = ariaRoledescriptionHandler;
