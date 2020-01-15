/**
 * Replaces the "lang" attribute of the specified violation node
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
