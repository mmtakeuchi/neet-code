var insert = function (intervals, newInterval) {
  let result = [];

  for (let i = 0; i < intervals.length; i++) {
    let cur = intervals[i];

    if (newInterval[1] < cur[0]) {
      result.push(newInterval);
      return [...result, ...intervals.slice(i)];
    } else if (newInterval[0] > cur[1]) {
      result.push(cur);
    } else {
      newInterval = [
        Math.min(newInterval[0], cur[0]),
        Math.max(newInterval[1], cur[1]),
      ];
    }
  }

  result.push(newInterval);
  return result;
};

// Time: O(n)
// Space: O(n)
