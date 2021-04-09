/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let str1 = str;
  let s = '';
  let i = 0;
  while (i <= str1.length) {
    if (str1[i] === str1[0]) {
      i++;
    } else {
      s = `${s}${i > 1 ? i : ''}${str1[0]}`;
      str1 = str1.slice(i);
      i = 0;
    }
  }
  return s;
}

module.exports = encodeLine;
