/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 找波峰波谷
  // if (!prices || prices.length === 0) return 0;
  // let profit = 0,
  //   buyPrice,
  //   sellPrice;
  // let i = 0,
  //   len = prices.length;
  // while (i < len - 1) {
  //   while (i < len - 1 && prices[i + 1] <= prices[i]) ++i;
  //   buyPrice = prices[i];
  //   while (i < len - 1 && prices[i + 1] > prices[i]) ++i;
  //   sellPrice = prices[i];
  //   profit += sellPrice - buyPrice;
  // }
  // return profit;

  // 贪心版本
  if (!prices || prices.length === 0) return 0;
  let profit = 0;
  for (let i = 1; i < prices.length; ++i) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};
// @lc code=end
