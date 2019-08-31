function ListNode(val) {
  this.val = val
  this.next = null
}

function buildLinkedList3(result, totalNumArr) {
  if (totalNumArr.length > 0) {
    const value = parseInt(totalNumArr.shift())
    if (!result) {
      result = new ListNode(value)
      buildLinkedList3(result, totalNumArr)
    } else {
      result.next = new ListNode(value)
      buildLinkedList3(result.next, totalNumArr)
    }
  }
  return result
}

function buildLinkedList(node1, node2, plusOne, result) {
  const node1Val = node1 ? node1.val : 0
  const node2Val = node2 ? node2.val : 0
  const total = node1Val + node2Val + plusOne
  const value = total % 10
  const nextPlusOne = total > 9 ? 1 : 0
  if (!result) {
    result = new ListNode(value)
  } else {
    result.val = value
  }
  if ((node1 && node1.next) || (node2 && node2.next)) {
    result.next = new ListNode(0)
    result.next = buildLinkedList(
      node1 && node1.next ? node1.next : null,
      node2 && node2.next ? node2.next : null,
      nextPlusOne,
      result.next
    )
  } else if (nextPlusOne === 1) {
    result.next = new ListNode(1)
  }

  return result
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  return buildLinkedList(l1, l2, 0, null)
}

module.exports = {
  addTwoNumbers,
  ListNode,
  buildLinkedList: buildLinkedList3
}
