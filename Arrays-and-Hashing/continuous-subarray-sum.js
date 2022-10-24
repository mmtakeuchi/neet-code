// LeetCode #523
var checkSubarraySum = function (nums, k) {
  let remainder = { 0: -1 };
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    let r = total % k;

    if (remainder[r] === undefined) {
      remainder[r] = i;
    } else if (i - remainder[r] > 1) {
      return true;
    }
  }

  return false;
};

// Time: O(n)
// Space: O(n)
