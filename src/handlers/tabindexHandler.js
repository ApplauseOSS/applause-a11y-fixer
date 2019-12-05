const {replaceAt, openingTag} = require('./../utils/handlerUtils');

/**
 * Set the "tabindex" attribute for the specified violation node
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function tabIndexHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['element'];
  const location = dom.nodeLocation(element);
  element.setAttribute('tabindex', '0');
  return replaceAt(
      document,
      location.startTag.startOffset,
      location.startTag.endOffset,
      openingTag(element),
  );
}

module.exports = tabIndexHandler;
