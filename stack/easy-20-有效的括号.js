/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let len = s.length;
  if (len % 2 !== 0) {
    return false;
  }
  let left = "([{";
  let right = ")]}";
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (left.indexOf(char) !== -1) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let last = stack.pop();
      if (right.indexOf(char) !== left.indexOf(last)) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// @lc code=end

