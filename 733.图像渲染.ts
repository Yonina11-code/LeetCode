/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 */

// @lc code=start
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  let initValue: number = image[sr][sc]
  image[sr][sc] = color
  if (initValue === color) return image
  // 上
  if (sr - 1 >= 0 && image[sr - 1][sc] === initValue) {
    floodFill(image, sr - 1, sc, color)
  }
  if (sr + 1 <= image.length - 1 && image[sr + 1][sc] === initValue) {
    floodFill(image, sr + 1, sc, color)
  }
  if (sc -1 >= 0 && image[sr][sc - 1] === initValue) {
    floodFill(image, sr, sc - 1, color)
  }

  if (sc + 1 <= image[sr].length - 1 && image[sr][sc + 1] === initValue) {
    floodFill(image, sr, sc + 1, color)
  }
  return image
};
// @lc code=end