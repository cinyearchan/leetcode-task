/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  // 统计字符出现的次数
  // 所有的偶数 + 最大的奇数
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  let result = 0;
  for (let value of map.values()) {
    result += Math.floor(value / 2) * 2; // 偶数的肯定能配对，奇数的抹除余数1进行配对
  }
  return result !== s.length ? result + 1 : result;
};
// @lc code=end

