const {capitalize} = require('./miscUtils');

/** Format the specified violation for output
 * @param {object} violation the violation
 * @param {object} dom
 * @return {string} the result
 */
function formatViolation(violation, dom) {
  const violationNodes = violation['nodes'];
  return `>>> ${violation.id}
    Description : ${capitalize(violation['help'])}
    Impact      : ${capitalize(violation['impact'])}
    Help Info   : ${violation.helpUrl.split('?')[0]}
    Violations  : ${violationNodes.length}
    Related HTML:
${formatViolationNodes(violationNodes, dom)}`;
}


/** Format the specified violation node for output
 * @param {object} violationNode the violation node
 * @param {number} violationNodeIndex the violation node index
 * @param {object} dom
 * @return {string} the result
 */
function formatViolationNode(violationNode, violationNodeIndex, dom) {
  const location = dom.nodeLocation(violationNode.element);
  const lineNum = location.startLine.toString().padStart(11, ' ');
  const colVal = location.startCol.toString().padEnd(3, ' ');
  return `${lineNum}:${colVal} : ${violationNode['html']}`;
}


/** Format the specified violation nodes for output
 * @param {object} violationNodes the violation nodes
 * @param {object} dom
 * @return {string} the result
 */
function formatViolationNodes(violationNodes, dom) {
  return violationNodes.map((node, index) => formatViolationNode(node, index, dom)).join('\n');
}

exports.formatViolation = formatViolation;
exports.formatViloationNode = formatViolationNode;
exports.formatViloationNodes = formatViolationNodes;
