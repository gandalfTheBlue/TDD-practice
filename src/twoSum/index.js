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
  nums.forEach(num => (obj[num] = num))
  let result = null
  Object.keys(obj).forEach(key => {
    if (obj[target - key]) {
      result = [obj[key], obj[target - key]]
    }
  })

  return result
}
