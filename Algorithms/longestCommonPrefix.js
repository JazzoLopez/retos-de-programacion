/**
 *  * -> Easy <- *
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    strs.sort()
    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;
    while (i < first.length && i < last.length && first[i] === last[i]) {
        i++;
    }

    return first.substring(0,i)
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
