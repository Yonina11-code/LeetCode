/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || !k) return head
  let link = head
  let length: number = 0
  while(head) {
    length++
    head = head.next
  }
  head = link
  let count =  k < length ? k : k % length // 旋转次数
  if (count) { // 要旋转
    let fast = head, slow = head
    let index = 0
    while (index < count) {
      fast = fast.next
      index++
    }
    while (fast.next) {
      fast = fast.next
      slow = slow.next
    }
    let next = slow.next
    slow.next = null
    fast.next = link
    return next
  }
  return link
};
// @lc code=end

