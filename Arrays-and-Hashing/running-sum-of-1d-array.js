var runningSum = function (nums) {
  let result = [...nums];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result[i] = sum;
  }

  return result;
};

// Time: O(n)
// Space: O(n)
