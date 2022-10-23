// LeetCode #740
var deleteAndEarn = function (nums) {
  if (nums.length === 1) return nums[0];

  let map = numsMap(nums);
  let numsSet = new Set([...nums]);
  let sorted = Array.from(numsSet).sort((a, b) => a - b);

  if (sorted.length === 1) return map[sorted[0]];

  let earn1 = 0;
  let earn2 = 0;

  for (let i = 0; i < sorted.length; i++) {
    let cur = sorted[i] * map[sorted[i]];

    if (i > 0 && sorted[i] === sorted[i - 1] + 1) {
      let temp = earn2;
      earn2 = Math.max(cur + earn1, earn2);
      earn1 = temp;
    } else {
      let temp = earn2;
      earn2 = cur + earn2;
      earn1 = temp;
    }
  }

  return earn2;
};

var numsMap = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
    }
  }

  return map;
};

// Time: O(n * logn) logn => sort & traverse length of nums
// Space: O(n)
