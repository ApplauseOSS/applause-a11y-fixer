/**
 * Helper for program option
 * takes a string of comma separated values an converts it to an array
 * @param {string} value
 * @param {object} _ unused
 * @return {array} an array of strings
 */
function commaSeparatedListProcessor(value, _) {
  return value.split(',').map((item) => item.trim());
}

exports.commaSeparatedListProcessor = commaSeparatedListProcessor;
