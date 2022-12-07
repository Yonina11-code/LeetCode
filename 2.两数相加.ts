/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

 function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // let pointer = l1
  // let next = 0
  // while (l1 && l2) {
  //   let cur = l1.val + l2.val
  //   if ((cur + next) > 9) {
  //     cur = (cur + next) % 10
  //     next = Math.floor((l1.val + l2.val + next) / 10)
  //     l1.val = cur
  //   } else {
  //     l1.val = cur + next
  //     next = 0
  //   }
  //   if (!l1.next && l2.next) {
  //     l1.next = l2.next
  //     l1 = l1.next
  //     break
  //   } else if (!l1.next && !l2.next && next)  {
  //     l1.next = new ListNode()
  //     l1 = l1.next
  //     l2 = l2.next
  //     break
  //   }
  //   l1 = l1.next
  //   l2 = l2.next
  // }
  // while (l1 && next) {
  //   let cur = l1.val + next
  //   if (cur > 9) {
  //     next = Math.floor(cur / 10)
  //     cur = cur % 10
  //   } else {
  //     next = 0
  //   }
  //   l1.val = cur
  //   if (!l1.next && next) {
  //     l1.next = new ListNode()
  //     l1 = l1.next
  //     break
  //   }
  //   l1 = l1.next
  // }

  // if (next) {
  //   l1.val = next
  //   l1.next = null
  // }
  // return pointer
};
// @lc code=end

