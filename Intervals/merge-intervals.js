var merge = function (intervals) {
  let sorted = intervals.sort((a, b) => a[0] - b[0]);
  let result = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    let prevInt = result[result.length - 1];
    let curInt = sorted[i];

    if (curInt[0] <= prevInt[1]) {
      prevInt[1] = Math.max(curInt[1], prevInt[1]);
      continue;
    } else {
      result.push(curInt);
    }
  }

  return result;
};

// Time: O(n * logn) Sorting -> O(n * logn) & merging -> O(n)
// Space: O(n)
