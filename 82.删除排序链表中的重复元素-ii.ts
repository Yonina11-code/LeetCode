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
  if (!head || !head.next) return head // 11123
  let fake = new ListNode(0, head)
  let link = fake.next
  while (fake.next && fake.next.next) {
    if (fake.next.val === fake.next.next.val) {
      let x = fake.next.val
      while (x === fake.next.val) {
        fake.next = fake.next.next
      }
    } else {
      fake = fake.next
    }
  }
  return link
};
// @lc code=end

