/** Replaces the "lang" attribute of the specified violation node
 * Axe ID:
 *   html-has-lang https://dequeuniversity.com/rules/axe/3.0/html-has-lang
 *   html-lang-valid https://dequeuniversity.com/rules/axe/3.0/html-lang-valid
 *   valid-lang https://dequeuniversity.com/rules/axe/3.0/valid-lang
 * WCAG:
 *   3.1.2
 *   3.1.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function gReplaceLangHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    element.setAttribute('lang', 'en');
  });
}

module.exports = gReplaceLangHandler;
