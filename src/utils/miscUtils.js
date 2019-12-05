/** Capitalize the specified `str[ing]`
 * @param {string} str the string
 * @return {string} the result
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

exports.capitalize = capitalize;
