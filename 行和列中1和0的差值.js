function onesMinusZeros(grid: number[][]): number[][] {
  let result: number[][] = new Array(grid.length)
  let arrRow: number[][] =[]
  let arrLine: number[][] =[]
  for (let i = 0; i < grid.length; i++) { // 行
    let rOne = 0, rZero = 0
    grid[i].forEach(item => {
      if (item === 1) {
        rOne++
      } else {
        rZero++
      }
    })
    arrRow.push([rZero, rOne])
  }
  let r = 0, j = 0, lOne = 0, lZero = 0
  while (r < grid.length) {
    while (j < grid[0].length) {
      if (grid[r][j]) {
        lOne++
      } else {
        lZero++
      }
      j++
    }
    arrLine.push([lZero, lOne])
    i++
  }
  for (let i = 0; i < grid.length; i++) {
    result[i] = new Array[grid[i].length]
    for (let j = 0; j < grid[i].length; j++) {
      result[i][j] = arrRow[i][1] + arrLine[j][1] - arrRow[i][0] - arrLine[j][0]
    }
  }
  return result
};