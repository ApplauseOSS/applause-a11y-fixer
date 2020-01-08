const {HANDLER_MAP} = require('../config/handlerMap');
const {ProcessorError} = require('../errors/errors');

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

/**
 * Helper for program option
 * takes a string of comma separated values an converts it to an array
 * @param {string} value
 * @param {object} _ unused
 * @return {array} an array of strings
 */
function rulesProcessor(value, _) {
  const rulesList = commaSeparatedListProcessor(value, _);

  const validRules = Object.keys(HANDLER_MAP);

  rulesList.forEach((rule) => {
    if (!validRules.includes(rule)) {
      throw new ProcessorError(`Rule '${rule}' is not implemented.`);
    }
  });

  return rulesList;
}

exports.rulesProcessor = rulesProcessor;
