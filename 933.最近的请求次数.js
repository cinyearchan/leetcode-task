/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function () {
  this.pingCount = 0;
  this.count = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  if (!t || typeof t !== "number") {
    return null;
  }
  if (this.pingCount > 10 ** 4) {
    throw new Error("不能再调用 ping 方法");
  }
  if (t <= this.count[this.count.length - 1]) {
    throw new Error("必须保证每次对 ping 调用都是按照递增顺序来的");
  } else {
    if (t >= 1 && t <= 10 ** 9 && this.pingCount < 10 ** 4) {
      this.pingCount++;
      this.count.push(t);
      let left = t - 3000;
      let index = this.count.findIndex((item) => item >= left);
      return this.count.slice(index).length;
    } else {
      throw new Error("超出限制");
    }
  }
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end
