/*
 * @lc app=leetcode.cn id=1544 lang=javascript
 *
 * [1544] 整理字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  if (s.length === 0 || s.length === 1) {
    return s;
  }
  let i = 0;
  while (i <= s.length - 2 && s.length !== 0) {
    if (
      s[i] !== s[i + 1] &&
      (s[i].toLowerCase() === s[i + 1] || s[i].toUpperCase() === s[i + 1])
    ) {
      s = s.slice(0, i) + s.slice(i + 2);
      if (i > 0) {
        i--;
      }
    } else {
      i++;
    }
  }
  return s;
};
// @lc code=end

