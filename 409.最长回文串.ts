/*
 * @lc app=leetcode.cn id=409 lang=typescript
 *
 * [409] 最长回文串
 */

// @lc code=start
function longestPalindrome(s: string): number {
  if (!s) return 0
  let doubleArr: string[] = []
  let singleArr: string[] = []
  let sarr: string[] = s.split('')
  let tempArr: string[] = []
  while(sarr.length) {
    let temp: string = sarr[0]
    tempArr.push(sarr[0])
    for (let i:number = 1; i < sarr.length; i++) {
      if (temp === sarr[i]) {
        tempArr.push(sarr[i])
      }
      if (tempArr.length === 2) {
        doubleArr.push(...tempArr)
        tempArr = []
      }
    }
    if (tempArr.length) {
      singleArr.push(...tempArr)
      tempArr = []
    }
    sarr = sarr.filter(item => item !== sarr[0])
  }
  return singleArr.length ? doubleArr.length + 1 : doubleArr.length
};
// @lc code=end

