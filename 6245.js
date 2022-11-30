/**
 * @param {number} n
 * @return {number}
 */
 var pivotInteger = function(n) {
   if (n === 1) return 1
  let left = 1, right = n
  let leftResult = left, rightResult = right
  while (left <= right) {
    if (left === right && leftResult === rightResult) return left
    if (leftResult < rightResult) {
      left++
      leftResult += left
    } else  {
      right++
      rightResult += right
    }
  }
  return -1
};