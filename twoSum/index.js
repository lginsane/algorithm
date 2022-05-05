/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = new Object()
    for (let i = 0; i < nums.length; i++) {
        if (obj[target - nums[i]] !== undefined) {
            return [obj[target - nums[i]], i]
        }
        obj[nums[i]] = i
    }
};
// @lc code=end


// 解析
// obj[nums[i]] = i 将数组每一项值作为对象的key, 索引作为对象的value
// target - nums[i] 反向逆推，两数之和 - 其中一数 = 另外一数
// obj[target - nums[i]] !== undefined  判断另外一数在对象中是否存在
