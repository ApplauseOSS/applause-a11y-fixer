/**
 * Wraps the specified violation node value with a `li`
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function listHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['none'][0]['relatedNodes'][0].element;
  const location = dom.nodeLocation(element);
  return document.substring(0, location.startOffset) + '<li>' +
      document.substring(location.startOffset, location.endOffset) + '</li>' +
      document.substring(location.endOffset, document.length);
}

module.exports = listHandler;
