var search = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left += 1;
    } else if (nums[mid] > target) {
      right -= 1;
    } else {
      return mid;
    }
  }

  return -1;
};
