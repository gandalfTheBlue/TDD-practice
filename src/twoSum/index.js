/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
module.exports = function twoSum(nums, target) {
  if (!nums || !Array.isArray(nums) || nums.length < 2) {
    return null
  }

  let obj = {}
  let result = null
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (obj[target - num]) {
      result = [num, obj[target - num]]
      break
    } else {
      if (!obj[num]) {
        obj[num] = num
      } else {
        if (num + num === target) {
          result = [num, num]
          break
        }
      }
    }
  }

  return result
}
