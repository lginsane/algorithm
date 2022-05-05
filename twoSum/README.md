# 题目地址

[https://leetcode-cn.com/problems/two-sum/](https://leetcode-cn.com/problems/two-sum/)

# 题目描述

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

示例 1：

```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```
示例 2：
```
输入：nums = [3,2,4], target = 6
输出：[1,2]
```
示例 3：
```
输入：nums = [3,3], target = 6
输出：[0,1]
```

# 代码1
```
var twoSum = function(nums, target) {
    const obj = new Object()
    for (let i = 0; i < nums.length; i++) {
        if (obj[target - nums[i]] !== undefined) {
            return [obj[target - nums[i]], i]
        }
        obj[nums[i]] = i
    }
};
```

# 解析
- obj[nums[i]] = i 将数组每一项值作为对象的key, 索引作为对象的value
- target - nums[i] 反向逆推，两数之和 - 其中一数 = 另外一数
- obj[target - nums[i]] !== undefined  判断另外一数在对象中是否存在
