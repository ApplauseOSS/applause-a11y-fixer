const {contentToMap, mapToContent} = require('../utils/miscUtils');

/** Ensures <meta name="viewport"> does not disable text scaling and zooming
 * Axe ID:
 *   meta-viewport https://dequeuniversity.com/rules/axe/3.1/meta-viewport
 *   meta-viewport-large https://dequeuniversity.com/rules/axe/3.0/meta-viewport-large
 * WCAG:
 *   1.4.4
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
