const { addTwoNumbers, ListNode, buildLinkedList } = require('./addTwoNums')

it('should return linked list if give number array', () => {
  const result = buildLinkedList(null, [5, 7, 3].reverse())

  expect(result.val).toBe(3)
  expect(result.next.val).toBe(7)
  expect(result.next.next.val).toBe(5)
})

it('should return the node with value 5 if give node with value 2 and node with value 3', () => {
  const node1 = new ListNode(2)
  const node2 = new ListNode(3)

  const result = addTwoNumbers(node1, node2)

  expect(result.val).toBe(5)
})

it('should return the linked nodes 13 if give node with value 6 and node with value 7', () => {
  const node1 = new ListNode(6)
  const node2 = new ListNode(7)

  const result = addTwoNumbers(node1, node2)

  expect(result.val).toBe(3)
  expect(result.next.val).toBe(1)
})

it('should return the linked nodes 112 if give node with value 23 and node with value 89', () => {
  const link1 = new ListNode(3)
  link1.next = new ListNode(2)
  const link2 = new ListNode(9)
  link2.next = new ListNode(8)

  const result = addTwoNumbers(link1, link2)

  expect(result.val).toBe(2)
  expect(result.next.val).toBe(1)
  expect(result.next.next.val).toBe(1)
})

it('should return the linked nodes [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]', () => {
  const link1 = buildLinkedList(null, [
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1
  ])

  const link2 = buildLinkedList(null, [5, 6, 4])

  const result = addTwoNumbers(link1, link2)

  expect(result.val).toBe(6)
  expect(result.next.val).toBe(6)
  expect(result.next.next.val).toBe(4)
})
