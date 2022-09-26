var majorityElement = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];

    if (map[cur] !== undefined) {
      map[cur] += 1;
    } else {
      map[cur] = 1;
    }
  }

  const sorted = Object.keys(map).sort((a, b) => map[a] - map[b]);
  return sorted[sorted.length - 1];
};

// Time: O(n)
// Space: (n)
