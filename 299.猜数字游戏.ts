/*
 * @lc app=leetcode.cn id=299 lang=typescript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
function getHint(secret: string, guess: string): string {
  let sa: string[] = secret.split('')
  let ga: string[] = guess.split('')
  let a: number = 0
  let b: number = 0
  let index: number = 0
  while (index < ga.length && ga.length) {
    if (sa[index] === ga[index]) {
      a++
      sa.splice(index, 1)
      ga.splice(index, 1)
    } else {
      index++
    }
  }
  index = 0
  while (ga.length) {
    // console.log(secret,ga, ga[index], index)
    let sIndex: number = sa.indexOf(ga[index])
    if (~sIndex) {
      b++
      sa.splice(sIndex, 1)
    }
    ga.splice(index, 1)
  }
  return `${a}A${b}B`
};
// @lc code=end

