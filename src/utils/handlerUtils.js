/**
 * Replace the value at the specified indices with the provided value
 * @param {string} str the string
 * @param {int} start the start index
 * @param {int} end the end index
 * @param {string} replacement the replacement
 * @return {string} the result
 */
function replaceAt(
    str,
    start,
    end,
    replacement,
) {
  return str.substring(0, start) +
      replacement +
      str.substring(end, str.length);
}

/**
 * Find the opening tag for a specified element
 * @param {object} element the element
 * @return {string} the result
 */
function openingTag(element) {
  const outerHtml = element.outerHTML;

  let openingTagLength;
  if (outerHtml.match(new RegExp(`</${element.tagName}>$`, 'i'))) {
    openingTagLength = outerHtml.length -
        element.innerHTML.length -
        (element.tagName.length + 3);
  } else {
    openingTagLength = outerHtml.length;
  }

  return outerHtml.slice(0, openingTagLength);
}


exports.replaceAt = replaceAt;
exports.openingTag = openingTag;
