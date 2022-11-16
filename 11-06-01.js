var applyOperations = function(nums) {
  let result = []
  let zeroI =  []
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2
      nums[i + 1] = 0
    } 
    if (nums[i] === 0) {
      zeroI.push(i)
    }
  }
  nums.forEach((item ,index) => {
    if (!zeroI.includes(index)) {
      result.push(item)
    }
  })
  zeroI.forEach(() => {
    result.push(0)
  })
  return result
};
console.log(applyOperations([1,2,2,1,1,0]))