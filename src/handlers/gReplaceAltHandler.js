const {S} = require('../constants/constants');

/** Replaces the "alt" attribute of the specified violation node
 * Axe ID:
 *   area-alt https://dequeuniversity.com/rules/axe/3.0/area-alt
 *   image-alt https://dequeuniversity.com/rules/axe/3.0/image-alt
 *   input-image-alt https://dequeuniversity.com/rules/axe/3.0/input-image-alt
 * WCAG:
 *   1.1.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function gReplaceAltHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    element.setAttribute('alt', S.CHANGE_ME);
  });
}

module.exports = gReplaceAltHandler;
