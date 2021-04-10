/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = [];
  for (let i = 0; i < names.length; i++) {
    let k = 0;
    for (let j = 0; j <= res.length; j++) {
      if (res[j] === names[i] || names[j] === names[i]) {
        k++;
      }
    }
    if (k === 1) {
      res.push(names[i]);
    } else if (k === 2) {
      res.push(`${names[i]}(1)`);
    } else {
      res.push(`${names[i]}(${k - 1})`);
    }
  }
  return res;
}

module.exports = renameFiles;
