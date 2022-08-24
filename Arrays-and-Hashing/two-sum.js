var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[target - nums[i]] = i;
    } else {
      return [map[nums[i]], i];
    }
  }
};
