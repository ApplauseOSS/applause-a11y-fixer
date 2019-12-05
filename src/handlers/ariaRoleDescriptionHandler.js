const {replaceAt, openingTag} = require('./../utils/handlerUtils');

/**
 * Update the "aria-roledescription" for the specified violation node
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function ariaRoleDescriptionHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['element'];
  const location = dom.nodeLocation(element);
  element.removeAttribute('aria-roledescription');
  return replaceAt(
      document,
      location.startTag.startOffset,
      location.startTag.endOffset,
      openingTag(element),
  );
}

module.exports = ariaRoleDescriptionHandler;
