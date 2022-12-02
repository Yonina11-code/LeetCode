/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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

 function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head
  let link = head, slow = head, fast = head.next // 1122
  if (slow.val === fast.val) {
    while (slow && fast && slow.val === fast.val) {
      link = fast.next
      fast = fast.next
    }
    slow = fast
    if (fast && fast.next) fast = fast.next
  }
  if (fast) {
   fast= fast.next
  }
  while (fast) {
    if (slow.next.val === fast.val) {
      while (fast && slow.next.val === fast.val) {
        fast = fast.next
      }
      slow.next = fast
      if (fast) fast = fast.next
    } else {
      slow = slow.next
      fast = fast.next
    }
  }
  return link
};
// @lc code=end

