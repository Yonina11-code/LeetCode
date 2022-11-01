/*
 * @lc app=leetcode.cn id=165 lang=typescript
 *
 * [165] 比较版本号
 */

// @lc code=start
function compareVersion(version1: string, version2: string): number {
  let v1: string[] = version1.split('.')
  let v2: string[] = version2.split('.')
  let maxLen: number = Math.max(v1.length, v2.length)
  for (let i = 0; i < maxLen; i++) {
    if (v1[i] && v2[i]) {
      if (+v1[i] > +v2[i]) {
        return 1
      } else if (+v1[i] < +v2[i]) {
        return -1
      }
    } else if (v1[i] && +v1[i] > 0) {
      return 1
    } else if (v2[i] && +v2[i] > 0) {
      return -1
    }
  }
  return 0
};
// @lc code=end

