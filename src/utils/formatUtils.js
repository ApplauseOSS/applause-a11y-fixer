const {capitalize} = require('./miscUtils');

/** Format the specified violation for output
 * @param {object} violation the violation
 * @return {string} the result
 */
function formatViolation(violation) {
  const violationNodes = violation['nodes'];
  return `>>> ${violation.id}
    Description : ${capitalize(violation['help'])}
    Impact      : ${capitalize(violation['impact'])}
    Help Info   : ${violation.helpUrl.split('?')[0]}
    Violations  : ${violationNodes.length}
    Related HTML:
${formatViolationNodes(violationNodes)}`;
}


/** Format the specified violation node for output
 * @param {object} violationNode the violation node
 * @param {number} violationNodeIndex the violation node index
 * @return {string} the result
 */
function formatViolationNode(violationNode, violationNodeIndex) {
  return `${violationNodeIndex.toString().padStart(15, ' ')} : ${violationNode['html']}`;
}


/** Format the specified violation nodes for output
 * @param {object} violationNodes the violation nodes
 * @return {string} the result
 */
function formatViolationNodes(violationNodes) {
  return violationNodes.map(formatViolationNode).join('\n');
}

exports.formatViolation = formatViolation;
exports.formatViloationNode = formatViolationNode;
exports.formatViloationNodes = formatViolationNodes;
