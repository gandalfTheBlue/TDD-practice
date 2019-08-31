const twoSum = require('./twoSum')

it('should return the same array if meet the requirement', () => {
  const param = [2, 9]

  const result = twoSum(param, 11)

  expect(result).toStrictEqual([0, 1])
})

it('should return the same array if meet the requirement', () => {
  const param = [1, 4, 7, 5]

  const result = twoSum(param, 6)

  expect(result).toStrictEqual([0, 3])
})

it('should return the same array if meet the requirement', () => {
  const param = [4, 4, 7, 5]

  const result = twoSum(param, 8)

  expect(result).toStrictEqual([0, 1])
})
