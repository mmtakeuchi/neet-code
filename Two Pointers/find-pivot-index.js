var pivotIndex = function (nums) {
  let left = 0;
  let right = nums.reduce((tot, cur) => tot + cur, 0);
  let idx = 0;

  while (idx < nums.length) {
    let cur = nums[idx];

    right -= cur;

    if (left === right) {
      return idx;
    }

    left += cur;
    idx += 1;
  }

  return -1;
};

// Time: O(n)
// Space: O(1)
