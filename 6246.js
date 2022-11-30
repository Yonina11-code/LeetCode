var appendCharacters = function(s, t) {
  if (~s.indexof(t)) return 0
  let arr = []
  for (let i = 0; i < t.length; i++) {
    let index = s.indexof(t[i])
    if (!~index) return t.length - i + 1
    let temp = []
    while (~index) {
      let last = arr[arr.length - 1]
      let flag = last.some(item => index > item)
      if (flag) {
        temp.push(index)
      }
      index = s.indexof(t[i], index)
    }
    if (temp.length) {
      arr.push(temp)
    } else {
      return t.length - i + 1
    }
  }
  return 0
};