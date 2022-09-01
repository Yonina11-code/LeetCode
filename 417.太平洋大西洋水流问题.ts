/*
 * @lc app=leetcode.cn id=417 lang=typescript
 *
 * [417] 太平洋大西洋水流问题
 */

// @lc code=start
function pacificAtlantic(heights: number[][]): number[][] {
  if (!heights.length) return []
  let pArr: string[] = []
  let aArr: string[] = []
  let result: number[][] = []
  let rLength: number = heights.length
  let lLength: number = heights[0].length
  for (let i = 0; i < rLength; i++) { // 太平洋
    pArr.push(`${i}-0`)
  }
  for (let i = 0; i < lLength; i++) {
    pArr.push(`0-${i}`)
  }
  for (let i = rLength - 1; i >= 0; i--) { // 大西洋
    aArr.push(`${i}-${lLength - 1}`)
  }
  for (let i = lLength - 1; i >= 0 ; i++) {
    aArr.push(`${rLength - 1}-${i}`)
  }
  for (let i = 1; i < rLength - 1; i++) {
    for (let j = 1; j < lLength - 1; j++) {
      let temp: number = heights[i][j]
      if ((heights[i -1][j] <= temp && pArr.includes(`${i -1}-${j}`)) || (heights[i][j -1] <= temp && pArr.includes(`${i}-${j - 1}`))) {
        pArr.push(`${i}-${j}`)
      }
    }
  }
  for (let i = rLength - 2; i >= 1; i--) {
    for (let j = lLength - 2; j >= 1; j--) {
      let temp: number = heights[i][j]
      if ((heights[i + 1][j] <= temp && pArr.includes(`${i + 1}-${j}`)) || (heights[i][j + 1] <= temp && pArr.includes(`${i}-${j + 1}`))) {
        aArr.push(`${i}-${j}`)
      }
    }
  }
  for (let i = 0; i < pArr.length; i++) {
    let temp: string = pArr[i]
    if (aArr.includes(temp)) {
      let num = temp.split('-')
      result.push([+num[0], +num[1]])
    }
  }
  return result
};

// @lc code=end

