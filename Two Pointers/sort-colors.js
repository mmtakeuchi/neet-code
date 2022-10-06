var sortColors = function (nums) {
  let left = 0;
  let cur = 0;
  let right = nums.length - 1;

  while (cur <= right) {
    if (nums[cur] === 0) {
      [nums[left], nums[cur]] = [nums[cur], nums[left]];
      left += 1;
      cur += 1;
    } else if (nums[cur] === 2) {
      [nums[cur], nums[right]] = [nums[right], nums[cur]];
      right -= 1;
    } else {
      cur += 1;
    }
  }

  return nums;
};

// Time: O(n)
// Space: O(1)
