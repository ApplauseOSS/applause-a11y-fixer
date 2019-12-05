const {replaceAt, openingTag} = require('./../utils/handlerUtils');

/**
 * Replaces the "title" attribute of the specified violation node
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function replaceTitleHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['element'];
  const location = dom.nodeLocation(element);
  element.setAttribute('title', 'CHANGE_ME');
  return replaceAt(
      document,
      location.startTag.startOffset,
      location.startTag.endOffset,
      openingTag(element),
  );
}

module.exports = replaceTitleHandler;
