/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head || !head.next) return null
  let link = head
  let fast = head, slow = head
  let index = 0
  while (index < n) {
    fast = fast.next
    index++
  }
  if (!fast) {
    return head.next
  }
  fast = fast.next
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return link
}
// @lc code=end

