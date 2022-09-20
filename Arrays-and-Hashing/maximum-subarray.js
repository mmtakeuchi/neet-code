var maxSubArray = function (nums) {
  let max = nums[0];
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    if (current < 0) {
      current = 0;
    }
    current += nums[i];
    max = Math.max(max, current);
  }

  return max;
};

// Time: O(n)
// Space: O(1)
