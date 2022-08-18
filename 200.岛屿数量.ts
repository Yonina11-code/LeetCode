/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  let total : number = 0
  for (let r : number = 0; r < grid.length; r++) {
    for (let l: number = 0; l < grid[r].length; l++) {
      if (grid[r][l] === '1') {
        total++
        toZeroIslands(grid, r, l)
      }
    }
  }
  return total

};
function toZeroIslands (grid, r, l) {
  if (r < 0 || r + 1 > grid.length || l < 0 || l + 1 > grid[r].length || grid[r][l] === '0') return
  grid[r][l] = '0'
  toZeroIslands(grid, r - 1, l)
  toZeroIslands(grid, r + 1, l)
  toZeroIslands(grid, r, l - 1)
  toZeroIslands(grid, r, l + 1)
}
// @lc code=end

