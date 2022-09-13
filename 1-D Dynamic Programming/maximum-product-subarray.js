var maxProduct = function (nums) {
  let result = nums[0];
  let max = nums[0];
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let tempMin = min * nums[i];
    let tempMax = max * nums[i];

    min = Math.min(nums[i], tempMin, tempMax);
    max = Math.max(nums[i], tempMin, tempMax);

    result = Math.max(result, max);
  }

  return result;
};

// Time: O(n)
// Space: O(n)
