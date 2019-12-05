const {capitalize} = require('./miscUtils');

/** Format the specified violation for output
 * @param {object} violation the violation
 * @return {string} the result
 */
function formatViolation(violation) {
  const violationNodes = violation['nodes'];
  return `${violation['description'].replace('Ensures', 'Ensure')}:
  Impact: ${capitalize(violation['impact'])}
  Related HTML:
${formatViolationNodes(violationNodes)}
  Violations: ${violationNodes.length}`;
}


/** Format the specifed violation node for output
 * @param {object} violationNode the violation node
 * @return {string} the result
 */
function formatViolationNode(violationNode) {
  return `    - ${violationNode['html']}`;
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
