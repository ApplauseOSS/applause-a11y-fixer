/** Replaces the "lang" attribute of the specified violation node]
 * Axe ID:
 *   html-xml-lang-mismatch https://dequeuniversity.com/rules/axe/3.3/html-xml-lang-mismatch
 * WCAG:
 *   3.1.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function htmlXmlLangMismatchHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    element.setAttribute('xml:lang', element.lang);
  });
}

module.exports = htmlXmlLangMismatchHandler;
