const {replaceAt} = require('./../utils/handlerUtils');

/**
 * Strips the specified violation node from the dom
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function stripElementHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['element'];
  const location = dom.nodeLocation(element);
  return replaceAt(
      document,
      location.startOffset,
      location.endOffset,
      '',
  );
}

module.exports = stripElementHandler;
