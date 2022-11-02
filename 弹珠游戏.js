/**
 * @param {number[]} flowers
 * @param {number} cnt
 * @return {number}
 */
 var beautifulBouquet = function(flowers, cnt) {
  let len = 1
  let result = 0
  while (len < flowers.length) {
    result += splitBlock(flowers, cnt, len)
  }
  return result
};
var splitBlock = function (flowers, cnt, length) {
  let count = 0
  for (let i = 0; i < flowers.length; i++) {
    let temp = flowers.subString(i, cnt + i)
    if (temp.length <= cnt) {
      count++
    } else {
      let tempObj = {}
      let flag = 1 // 是否可以加一
      for (let j = 0; j < temp.length; j++) {
        if (tempObj[temp[j]]) {
          tempObj[temp[j]]++
        } else {
          tempObj[temp[j]] = 1
        }
        if (tempObj[temp[j]] > cnt) {
          flag = 0
          break
        }
      }
      if (flag) {
        count++
      }
    }
    
  }
  return count
}