/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 var maximumSubarraySum = function(nums, k) {
  const n = nums.length;
  const map = new Map();
  let sum = 0;
  let ans = 0;
  let l = 0, r = 0;
  while (r < n) {
    const v = nums[r];
    sum += v;
    increment(map, v);
    while (l <= r && (map.size > k || map.get(v) > 1)) {
      sum -= nums[l];
      decrement(map, nums[l]);
      l++;
    }
    if (r - l + 1 === k) {
      ans = Math.max(ans, sum);
    }
    r++;
  }

  return ans;
};

function increment(map, x) {
  map.set(x, (map.get(x) || 0) + 1);
}

function decrement(map, x) {
  if (map.get(x) === 1) {
    map.delete(x);
  } else {
    map.set(x, map.get(x) - 1);
  }
}