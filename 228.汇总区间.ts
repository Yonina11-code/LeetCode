/*
 * @lc app=leetcode.cn id=228 lang=typescript
 *
 * [228] 汇总区间
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  let temparr: number[] = []
  let result: string[] = []
  nums.forEach(item => {
    if (!temparr.length) {
      temparr.push(item)
    } else {
      let length =  temparr.length
      if (temparr[length - 1] + 1 === item) {
        temparr.push(item)
      } else {
        if (length > 1) {
          result.push(`${temparr[0]}->${temparr[length-1]}`)
        } else {
          result.push(`${temparr[0]}`)
        }
        temparr = [item]
      }
    }
  })
  if (temparr.length) {
    if (temparr.length > 1) {
      result.push(`${temparr[0]}->${temparr[temparr.length-1]}`)
    } else {
      result.push(`${temparr[0]}`)
    }
  }
  return result
};
// @lc code=end

