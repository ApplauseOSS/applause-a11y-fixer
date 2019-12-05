/**
 * Wraps the specified violation node value with a `ul`
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function listItemHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['element'];
  const location = dom.nodeLocation(element);
  return document.substring(0, location.startOffset) + '<ul>' +
      document.substring(location.startOffset, location.endOffset) + '</ul>' +
      document.substring(location.endOffset, document.length);
}

module.exports = listItemHandler;
