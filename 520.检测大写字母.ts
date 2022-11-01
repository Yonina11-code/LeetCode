function detectCapitalUse(word: string): boolean {
  let exa: number = 0
  let big: boolean = false // 全是大写
  if (word[0].charCodeAt(0) < 97 ) {
    exa = 65 // 大写
  } else {
    exa = 97 // 小写
  }
  for (let i = 1; i < word.length; i++) {
    if (exa === 97) { // 小写
      if (word[i].charCodeAt(0) < 97) {
        return false
      }
    } else { // 首字母大写
      if (i === 1) {
        big = word[i].charCodeAt(0) < 97
      } else if ((word[i].charCodeAt(0) >= 97) && big || (word[i].charCodeAt(0) < 97 && !big)) { 
        return false
      }
    }
  }
  return true
};