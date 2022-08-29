/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

function isPalindrome(head: ListNode | null): boolean {
  let list: number[] = [head.val]
  while (head.next) {
    head = head.next
    list.push(head.val)
  }
  let half: number = list.length >> 1
  if (!(list.length % 2)) {
    return list.slice(0, half).join('') === list.slice(half).join('')
  } else {
    return list.slice(0, half+1).join('') === list.slice(half).join('')
  }
};
// @lc code=end

