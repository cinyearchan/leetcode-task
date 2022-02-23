/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let len = g.length;
  let i = 0;
  while (g.length !== 0 && i <= s.length) {
    if (g[0] <= s[i]) {
      g.shift();
    }
    i++;
  }
  return len - g.length;
};
// @lc code=end
