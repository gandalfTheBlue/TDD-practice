/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
module.exports = function twoSum(nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (obj[target - num] >= 0) {
      return [obj[target - num], i]
    } else {
      obj[num] = i
    }
  }

  return null
}
