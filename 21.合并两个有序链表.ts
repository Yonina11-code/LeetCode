/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // [1,2,3] [1,2,4]
  if (!list1 && !list2) return null
  if (!list1 && list2) return list2
  if (list1 && !list2) return list1
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else if (list1.val >= list2.val) {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
};
// @lc code=end

