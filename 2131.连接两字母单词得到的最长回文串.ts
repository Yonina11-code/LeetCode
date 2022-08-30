/*
 * @lc app=leetcode.cn id=2131 lang=typescript
 *
 * [2131] 连接两字母单词得到的最长回文串
 */

// @lc code=start
function longestPalindrome(words: string[]): number {
  if (!words.length) return 0
  let num: number = 0
  let obj: object = {}
  let mid: boolean = false
  words.forEach((item, index) => {
    if (obj[item]) {
      obj[item]++
    } else {
      obj[item] = 1
    }
  })
  let arrObj: string[] = Object.keys(obj)
  while(arrObj.length) {
    let temp: string = arrObj[0]
    let findIndex = arrObj.findIndex(item => item === temp.split('').reverse().join(''))
    let count: number = obj[temp]
    if (findIndex === 0) { // 回文
      if (count % 2) { // 奇数
        if (!mid) {
          mid = true
          num++
        }
        count--
      }
      num += count
    } else if (findIndex !== -1) {
      let reverseCount: number = obj[arrObj[findIndex]]
      num += Math.min(count, reverseCount) * 2
      arrObj.splice(findIndex, 1)
    }
    arrObj.shift()
  }
  return num * 2
};
// @lc code=end

