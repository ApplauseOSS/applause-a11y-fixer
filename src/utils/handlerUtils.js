const {SubNodeType} = require('../constants/constants');

/**
 * @param {array} violationNodes Array of Axe violation nodes
 * @param {SelectorType} selector Where to pull relatedNodes from ['any', 'all', 'none']
 * @param {string} primaryTagName A specific primary element if needed
 */
function landmarkNoDuplicate(violationNodes, selector, primaryTagName = '') {
  violationNodes.forEach((node) => {
    const elements = getRelated(node, selector, SubNodeType.ELEMENTS);

    const primaryTagIndex = elements.reduce((primaryTagIndex, e, i) => {
      if (primaryTagName && e.tagName === primaryTagName) {
        primaryTagIndex = i;
      }
      return primaryTagIndex;
    }, 0);

    const primaryTagElement = elements.splice(primaryTagIndex, 1)[0];
    elements.forEach((element) => {
      element.childNodes.forEach((child) => {
        primaryTagElement.appendChild(child);
      });
      element.remove();
    });
  });
}


/** Convert key value map to content attr string
 * @param {object} node
 * @param {SelectorType} selector One of ['any', 'all', 'none']
 * @param {SubNodeType} type One of ['data', 'relatedNodes']
 * @return {array} related data array
 */
function getRelated(node, selector, type) {
  return node[selector].reduce((relatedArray, related) => {
    let relatedItems = related[type];
    if (relatedItems && type === SubNodeType.ELEMENTS) {
      relatedItems = relatedItems.map((x) => x.element);
    }
    return relatedArray.concat(relatedItems);
  }, []);
}

exports.landmarkNoDuplicate = landmarkNoDuplicate;
exports.getRelated = getRelated;
