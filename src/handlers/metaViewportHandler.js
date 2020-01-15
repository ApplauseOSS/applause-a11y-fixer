const {contentToMap, mapToContent} = require('../utils/miscUtils');

/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function metaViewportHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    const contentMap = contentToMap(element.getAttribute('content'));

    const userScalable = contentMap.get('user-scalable');
    if (userScalable.toLowerCase() === 'no') {
      contentMap.delete('user-scalable');
    }
    const maximumScale = parseInt(contentMap.get('maximum-scale'));

    if (maximumScale && maximumScale < 5) {
      contentMap.set('maximum-scale', '5');
    }

    element.setAttribute('content', mapToContent(contentMap));
  });
}

module.exports = metaViewportHandler;
