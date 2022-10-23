// LeetCode #213
var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  return Math.max(
    robHouse(nums, 0, nums.length - 1),
    robHouse(nums, 1, nums.length)
  );
};

var robHouse = function (nums, start, end) {
  let prev = 0;
  let cur = 0;

  for (let i = start; i < end; i++) {
    let temp = cur;
    cur = Math.max(cur, nums[i] + prev);
    prev = temp;
  }

  return cur;
};

// Time: O(n)
// Space: O(1)
