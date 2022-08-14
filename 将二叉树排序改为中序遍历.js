
(function midFunc () {
  let str = 'a{b{d,e{g,h{,i}}},c{f}}'
  // let str = 'a{b,c}'
  let copyStr = str
  console.log('result',findSub(copyStr))

})()
function findSub (str) {
  if (str.length <= 1) return str
  let tempResult = ''
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === ',') {
      if (/[A-z]/.test(str[i -1])) {
        tempResult += str[i -1]
        if (str[i -3]) {
          tempResult += str[i -3]
        }
        str = str.replace(str.substring(i -3, i + 1), '')
        i = i - 3
      } else if (str[i - 1] === '{') {
        if (str[i -2]) {
          tempResult += str[i -2]
          str = str.replace(str.substring(i -2, i + 1), '')
          i = i - 2
        }
      } else if (str[i - 1] === '}') {
        i = i - (str.match(/}+/g).length)
        console.log(str.match(/}+/g).length, i)
        str = str.replace(/}+/, '')
      }
    } else if (str[i] === '}' && /[A-z]/.test(str[i -1])) {
      if (str[i -1]) {
        tempResult += str[i -1]
        console.log('str[i -3]', str[i -3], str)
        if (str[i -3] && /[A-z]/.test(str[i -3])) {
          tempResult += str[i -3]
          str = str.replace(str.substring(i -3, i + 1), '')
          i = i - 3
        } else {
          str = str.replace(str.substring(i -2, i + 1), '')
          i = i - 2
        }
      }
    }
  }
  return tempResult
}