/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  // 暴力解法，提交时超出时间限制
  // let len = gas.length;
  // for (let i = 0; i < len; ++i) {
  //   let tank = 0;
  //   for (let j = i; j < i + len; ++j) {
  //     let k = j % len;
  //     tank += gas[k] - cost[k];
  //     if (tank < 0) {
  //       break;
  //     }
  //   }
  //   if (tank >= 0) {
  //     return i;
  //   }
  // }
  // return -1;

  // 暴力解法优化
  // let len = gas.length, j = 0;
  // for (let i = 0; i < len; i = j + 1) {
  //   let tank = 0;
  //   for (j = i; j < i + len; ++j) {
  //     let k = j % len;
  //     tank += gas[k] - cost[k];
  //     if (tank < 0) {
  //       break;
  //     }
  //   }
  //   if (tank >= 0) {
  //     return i;
  //   }
  // }
  // return -1;

  // 贪心
  let len = gas.length,
    start = 0;
  let total = 0,
    tank = 0;
  for (let i = 0; i < len; ++i) {
    total += gas[i] - cost[i];
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }
  return total < 0 ? -1 : start;
};
// @lc code=end
