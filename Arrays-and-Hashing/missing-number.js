var missingNumber = function (nums) {
  let sum = nums.length;

  for (let i = 0; i < nums.length; i++) {
    sum += i - nums[i];
  }

  return sum;
};

// Time: O(n)
// Space: O(1)
