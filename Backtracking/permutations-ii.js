// LeetCode #47
var permuteUnique = function (nums) {
  let result = [];
  let perm = [];
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
    }
  }

  var dfs = function () {
    if (perm.length === nums.length) {
      result.push(perm.slice());
      return;
    }

    for (let key in map) {
      if (map[key] > 0) {
        perm.push(key);
        map[key] -= 1;

        dfs();

        map[key] += 1;
        perm.pop();
      }
    }
  };

  dfs();
  return result;
};

// Time: O(n! * n)
