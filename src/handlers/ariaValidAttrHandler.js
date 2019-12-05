const {replaceAt, openingTag} = require('./../utils/handlerUtils');

/**
 * Strip out _any_ invalid "aria" attributes for the specified violation node
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function ariaValidAttrHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['element'];
  const location = dom.nodeLocation(element);
  for (const invalidAttribute of violationNode['any'][0]['data']) {
    element.removeAttribute(invalidAttribute);
  }
  return replaceAt(
      document,
      location.startTag.startOffset,
      location.startTag.endOffset,
      openingTag(element),
  );
}

module.exports = ariaValidAttrHandler;
