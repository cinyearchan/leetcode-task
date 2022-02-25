/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  // let map = new Map();
  // let result = [];
  // for (let i = 0; i < nums1.length; i++) {
  //   if (!map.has(nums1[i])) {
  //     map.set(nums1[i], 1);
  //   }
  // }
  // for (let i = 0; i < nums2.length; i++) {
  //   if (map.has(nums2[i]) && !result.includes(nums2[i])) {
  //     result.push(nums2[i]);
  //   }
  // }
  // return result;
  let len1 = nums1.length;
  let len2 = nums2.length;
  if (len1 === 0 || len2 === 0) {
    return [];
  }
  let a, b;
  if (len1 > len2) {
    a = nums1;
    b = nums2;
  } else {
    a = nums2;
    b = nums1;
  }
  return [...new Set(b.filter(item => a.includes(item)))];
};
// @lc code=end

