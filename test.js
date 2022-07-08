(function validatePassword () {
  let str = ''
  const tempArr = [
    '021Abc9000',
    '021Abc9Abc1',
    '021ABC9000',
    '021$bc9000'
  ]
  let result = []
  let upperCase = /[A-Z]/g
  let lowerCase = /[a-z]+/g
  let numReg = /[0-9]/g
  let otherReg = /\w/g
  for (let j = 0; j < tempArr.length; j++) {
    str = tempArr[j]
    if (str.length < 8) {
      result.push('NG')
      continue
    }
    let mini3 = [upperCase.test(str), lowerCase.test(str), numReg.test(str),otherReg.test(str)].filter(item => item)
    if (mini3.length < 3) {
      result.push('NG')
      continue
    }
    for (let i = 1; i < (str.length / 2); i++) {
      let flag = true
      for (let k = 0; k < i; k++) {
        let temp = str.substring(k, i + 2)
        console.log('mini3', temp)
        if (str.indexOf(temp, i + 3) !== -1) {
          result.push('NG')
          flag = false
          break
        } else if ((i + 1) >= (str.length / 2)) {
          result.push('OK')
          // flag = false
          break
        }
      }
      if (!flag) break
    }
  }
  result.forEach(item => {
    console.log(item)
  })
})()