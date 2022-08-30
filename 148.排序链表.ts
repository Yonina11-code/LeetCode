/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function sortList(head: ListNode | null): ListNode | null {
  if (!head) return null
  if (!head.next) return head
  let result: ListNode = new ListNode(0)
  let arr: number[] = []
  let copyNode: ListNode = head
  while(copyNode) {
    arr.push(copyNode.val)
    copyNode = copyNode.next
  }
  arr.sort((a, b) => a- b)
  copyNode = new ListNode(0)
  result.val = arr[0]
  result.next = copyNode
  arr.shift()
  arr.forEach((item, index) => {
    copyNode.val = item
    copyNode.next =  index === arr.length - 1 ? null : new ListNode(0)
    copyNode = copyNode.next
  })
  return result
};
// @lc code=end

