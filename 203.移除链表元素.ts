/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) return null
  while (head && head.val === val) {
    head = head.next
  }
  let listnode = head
  while (listnode && listnode.next) {
    if (listnode.next.val === val) {
      listnode.next = listnode.next.next || null
      continue
    }
    listnode = listnode.next
  }
  // console.log(listnode, head)
  return head

};
// @lc code=end

