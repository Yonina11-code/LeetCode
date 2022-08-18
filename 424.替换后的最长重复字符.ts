/*
 * @lc app=leetcode.cn id=424 lang=typescript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
function characterReplacement(s: string, k: number): number {
  if (!s) return 0
  let sObj: object = {}
  for (let i: number = 0; i < s.length; i++) {
    let temp: string = s[i]
    if (sObj[temp]) {
      sObj[temp].push(i)
    } else {
      sObj[temp] = [i]
    }
  }
  let max: number = 0
  console.log(sObj)
  Object.keys(sObj).forEach(key => {
    let count = 1
    let arr: number[] = sObj[key]
    let j: number = k
    for (let i: number = 0; i < arr.length; i++) {
      if (arr[i] + 1 === arr[i + 1]) { // 连续的
        count++
      } else { // 不连续的
        let num = 1 // 连续可以补几个
        while (j) {
          j--
          if (arr[i] + 1 + num === arr[i + 1]) {
            count++
            if (arr[i + 1] + 1 !== arr[i + 2]) {
                count += j + 1
            }
            break
          } else if (j) {
            num++
          }
        }
        let isNeed = count !== s.length ? j : 0
        max = Math.max(max, count + isNeed)
        count = 1
      }
    }
    let isNeed = count !== s.length ? j : 0
    max = Math.max(max, count + isNeed)
  })
  return max
};
// @lc code=end

