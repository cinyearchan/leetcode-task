/*
 * @lc app=leetcode.cn id=1903 lang=javascript
 *
 * [1903] 字符串中的最大奇数
 */

// @lc code=start
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  if (!Number.isNaN(+num) && num % 2 !== 0) {
    return num;
  }
  let arr = num.split("").filter((n) => !Number.isNaN(+n));
  let i = arr.length;
  let result = "";
  while (i >= 0) {
    let _arr = arr.slice(0, i);
    if (Number(_arr.join("")) % 2 !== 0) {
      result = _arr.join("");
      break;
    } else {
      i--;
    }
  }
  return result;
};
// @lc code=end
