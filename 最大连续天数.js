/**
 * @param {number[]} temperatureA
 * @param {number[]} temperatureB
 * @return {number}
 */
 var temperatureTrend = function(temperatureA, temperatureB) {
  if (!(temperatureA.length && temperatureB.length)) return 0
  let arrA = []
  let arrB = []
  let count = 0
  for (let i = 0; i < temperatureA.length - 1; i++) {
    if (temperatureA[i + 1] - temperatureA[i] > 0) { // 上升
      arrA.push(1)
    } else if (temperatureA[i + 1] - temperatureA[i] < 0 ) {
      arrA.push(-1)
    } else {
      arrA.push(0)
    }
  }
  for (let i = 0; i < temperatureB.length - 1; i++) {
    if (temperatureB[i + 1] - temperatureB[i] > 0) { // 上升
      arrB.push(1)
    } else if (temperatureB[i + 1] - temperatureB[i] < 0 ) {
      arrB.push(-1)
    } else {
      arrB.push(0)
    }
  }
  let tempCount = 0
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] === arrB[i]) {
      tempCount++
    } else {
      count = Math.max(tempCount, count)
      tempCount = 0
    }
  }
  count = Math.max(tempCount, count)
  return count
};
// console.log(temperatureTrend([21,18,18,18,31], [34,32,16,16,17]))