/** Ensure that tables do not have the same summary and caption
 * Axe ID:
 *   table-duplicate-name https://dequeuniversity.com/rules/axe/3.3/table-duplicate-name
 * WCAG:
 *   n/a
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function tableDuplicateNameHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node, nodeIndex) => {
    node.element.removeAttribute('summary');
  });
}

module.exports = tableDuplicateNameHandler;
