var permute = function (nums) {
  return dfs(nums);
};

var dfs = function (nums, permutation = [], permutations = []) {
  const isBaseCase = nums.length === permutation.length;
  if (isBaseCase) return permutations.push([...permutation]);

  for (let i = 0; i < nums.length; i++) {
    if (permutation.includes(nums[i])) continue;

    backTrack(nums, i, permutation, permutations);
  }

  return permutations;
};

const backTrack = (nums, i, permutation, permutations) => {
  permutation.push(nums[i]);

  dfs(nums, permutation, permutations);

  permutation.pop();
};

// Time: O(N!)
// Space: O(N!)
