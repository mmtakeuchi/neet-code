var searchRange = function (nums, target) {
  let left = binSearch(nums, target, true);
  let right = binSearch(nums, target, false);
  return [left, right];
};

// leftBias = [true, false], if false, result is rightBiased
// leftBias = searching for left index
// rightBias = searching for right index

var binSearch = function (nums, target, leftBias) {
  let left = 0;
  let right = nums.length - 1;
  let i = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      i = mid;

      if (leftBias) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return i;
};

// Time: O(logn)
// Space: O(1)
