var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  let curr = [];

  getSubsets(0, curr);

  return result;

  function getSubsets(start, subset) {
    result.push([...subset]);

    for (let i = start; i < nums.length; ++i) {
      if (i !== start && nums[i] === nums[i - 1]) {
        continue;
      }

      subset.push(nums[i]);
      getSubsets(i + 1, subset);
      subset.pop();
    }
  }
};

// Time Complexity: O(2^N)
// Space Complexity: O(N)
