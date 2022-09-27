var longestCommonPrefix = function (strs) {
  let cur = '';
  let start = 0;

  while (start < strs[0].length) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[0][start] !== strs[i][start]) {
        return cur;
      }
    }

    cur += strs[0][start];
    start += 1;
  }

  return cur;
};

// Time: O(n^2)
// Space: O(1)
