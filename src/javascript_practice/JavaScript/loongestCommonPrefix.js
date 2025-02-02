/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  // Start with the first string as the prefix
  let prefix = strs[0]

  // loop through the remaining strings

  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
      if (prefix === '') return ''
    }
  }
  return prefix
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
