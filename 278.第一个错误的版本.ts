/*
 * @lc app=leetcode.cn id=278 lang=typescript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        while (n) {
          if (isBadVersion(n) && !isBadVersion(n - 1)) {
            return n
          } else {
            n = n - 1
          }
        }
    };
};
// @lc code=end

