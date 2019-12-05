const {replaceAt, openingTag} = require('./../utils/handlerUtils');

/**
 * Strips the "aria-hidden" attribute from the specified violation node
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function stripAriaHiddenHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['element'];
  const location = dom.nodeLocation(element);
  element.removeAttribute('aria-hidden');
  return replaceAt(
      document,
      location.startTag.startOffset,
      location.startTag.endOffset,
      openingTag(element),
  );
}

module.exports = stripAriaHiddenHandler;
