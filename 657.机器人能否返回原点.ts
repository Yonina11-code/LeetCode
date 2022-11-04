/*
 * @lc app=leetcode.cn id=657 lang=typescript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
function judgeCircle(moves: string): boolean {
  let movesArr: string[] = moves.split('')
  if (movesArr.length % 2 !== 0) return false
  let obj: object = {
    'R': 1,
    'L': -1,
    'U': 2,
    'D': -2
  }
  let result: number = 0
  movesArr.forEach((item, index) => {
    result += obj[item]
  })
  return result === 0
};
// @lc code=end

