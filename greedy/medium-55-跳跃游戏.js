/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums == null || nums.length === 0) return false;
  let n = nums.length,
    max = 0;
  for (let i = 0; i < n; i++) {
    if (max >= n - 1) return true;
    if (i > max) return false;
    max = Math.max(max, i + nums[i]);
  }
  return false;
};
// @lc code=end
