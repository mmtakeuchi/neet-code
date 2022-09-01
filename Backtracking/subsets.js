// Backtracking
var subsets = function (nums) {
  let result = [];
  let subset = [];

  function dfs(arr, i, sub) {
    if (i >= arr.length) {
      result.push(sub);
      return;
    }

    dfs(arr, i + 1, [...sub, arr[i]]);

    dfs(arr, i + 1, sub);
  }

  dfs(nums, 0, subset);
  return result;
};

// BFS
var subsetsbfs = function (nums) {
  const result = [[]];

  for (let num of nums) {
    let append = [];
    for (let entry of result) {
      append.push([...entry, num]);
    }
    result.push(...append);
  }

  return result;
};

// Time Complexity: O(N x 2^N)
// Space Complexity: O(N)
