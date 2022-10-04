var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) {
        left += 1;
      } else if (sum > 0) {
        right -= 1;
      } else {
        result.push([nums[i], nums[left], nums[right]]);

        left += 1;

        while (nums[left] === nums[left - 1] && left < right) {
          left += 1;
        }
      }
    }
  }

  return result;
};

// Time: O(n * n)
// Space: O(n)
