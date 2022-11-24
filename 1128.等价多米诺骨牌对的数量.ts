/*
 * @lc app=leetcode.cn id=1128 lang=typescript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
function numEquivDominoPairs(dominoes: number[][]): number {
  let result: number = 0
  let map = new Map()
  for (let i = 0; i < dominoes.length; i++) {
    let str = dominoes[i].toString()
    if (map.has(str)) {
      let num = map.get(str)
      map.set(str, ++num)
    } else {
      let [m,n] = dominoes[i]
      if (map.has([n, m].toString())) {
        let num = map.get([n, m].toString())
        map.set([n, m].toString(), ++num)
      } else {
        map.set(str, 1)
      }
    }
  }
  for (let [key, value] of map.entries()) {
    if (value > 1) {
      result += (value * (value - 1)) /2
    }
  }
  return result
};
// @lc code=end

