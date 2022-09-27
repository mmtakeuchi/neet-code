var moveZeroes = function (nums) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left += 1;
    }
    right += 1;
  }

  return nums;
};

// Time: O(n)
// Space: O(1)
