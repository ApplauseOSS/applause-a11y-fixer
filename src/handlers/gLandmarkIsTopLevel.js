const {T} = require('../constants/constants');

/** Ensures landmarks at top level
 * Axe ID:
 *   landmark-banner-is-top-level https://dequeuniversity.com/rules/axe/3.0/landmark-banner-is-top-level
 *   landmark-complementary-is-top-level https://dequeuniversity.com/rules/axe/3.3/landmark-complementary-is-top-level
 *   landmark-contentinfo-is-top-level https://dequeuniversity.com/rules/axe/3.0/landmark-contentinfo-is-top-level
 *   landmark-main-is-top-level https://dequeuniversity.com/rules/axe/3.0/landmark-main-is-top-level
 * WCAG:
 *   n/a
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function gLandmarkIsTopLevel(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    const body = dom.window.document.getElementsByTagName(T.BODY)[0];
    body.firstChild.after(element);
  });
}

module.exports = gLandmarkIsTopLevel;
