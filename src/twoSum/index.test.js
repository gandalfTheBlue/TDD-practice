const twoSum = require('./index')

it('should return null if passed invalid parameters', () => {
  const invalidParam1 = null
  const invalidParam2 = [1]

  expect(twoSum(invalidParam1, 5)).toBe(null)
  expect(twoSum(invalidParam2, 5)).toBe(null)
})

it('should return null if not meet the requirement', () => {
  const param = [1, 7]

  const result = twoSum(param, 6)

  expect(result).toBe(null)
})

it('should return the same array if meet the requirement', () => {
  const param = [2, 9]

  const result = twoSum(param, 11)

  expect(result[0] + result[1]).toBe(11)
})

it('should return the same array if meet the requirement', () => {
  const param = [1, 4, 7, 5]

  const result = twoSum(param, 6)

  expect(result[0] + result[1]).toBe(6)
})

it('should return the same array if meet the requirement', () => {
  const param = [4, 4, 7, 5]

  const result = twoSum(param, 8)

  expect(result[0] + result[1]).toBe(8)
})

it('should return the null if not meet the requirement', () => {
  const param = [4, 7, 5]

  const result = twoSum(param, 8)

  expect(result).toBe(null)
})
