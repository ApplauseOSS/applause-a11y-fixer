/** Capitalize the specified `str[ing]`
 * @param {string} str the string
 * @return {string} the result
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

exports.capitalize = capitalize;


/** Convert meta content string to map
 * @param {string} content the value of the meta tag content attribute
 * @return {Map} a map of the content values
 */
function contentToMap(content) {
  const contentMap = new Map();
  content.split(',')
    .forEach((item) => {
      item.trim();
      const pair = item.split('=');
      if (pair.length === 2) {
        contentMap.set(pair[0].trim(), pair[1].trim());
      } else {
        contentMap.set(pair[0].trim(), null);
      }
    });
  return contentMap;
}

/** Convert key value map to content attr string
 * @param {Map} contentMap
 * @return {string} content string
 */
function mapToContent(contentMap) {
  const contentList = [];
  contentMap.forEach((value, key) => {
    if (value !== null) {
      contentList.push(`${key}=${value}`);
    } else {
      contentList.push(key);
    }
  });

  return contentList.join(', ');
}

/** Create a new `Text` node with only a newline
 * @param {object} dom
 * @return {object} Text Node
 */
function newLineNode(dom) {
  return dom.window.document.createTextNode(require('os').EOL);
}

exports.contentToMap = contentToMap;
exports.mapToContent = mapToContent;
exports.newLineNode = newLineNode;
