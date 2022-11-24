/*
 * @lc app=leetcode.cn id=1078 lang=typescript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
function findOcurrences(text: string, first: string, second: string): string[] {
  let arr: string[] = text.split(' ')
  if (arr.length < 3) return []
  return findThird(arr, first, second)
};
function findThird (text: string[], first: string, second: string): string[] {
  let result: string[] = []
  for (let i = 0; i < text.length - 2; i++) {
    if (text[i] === first && text[i + 1] === second) {
      result.push(text[i+2])
    }
  }
  return result
}
// @lc code=end

