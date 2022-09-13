var lengthOfLIS = function (nums) {
  let dp = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }

  return Math.max(...dp);
};

// Time: O(N^2), where N <= 2500 is the number of elements in array nums.
// Space: O(N)
