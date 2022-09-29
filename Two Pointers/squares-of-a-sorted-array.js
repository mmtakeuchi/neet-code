var sortedSquares = function (nums) {
  const sorted = new Array(nums.length);

  let start = 0;
  let end = sorted.length - 1;

  for (let insert = end; insert >= 0; insert--) {
    const squaredStart = nums[start] ** 2;
    const squaredEnd = nums[end] ** 2;

    if (squaredStart > squaredEnd) {
      sorted[insert] = squaredStart;
      start++;
    } else {
      sorted[insert] = squaredEnd;
      end--;
    }
  }

  return sorted;
};

// Time: O(n)
// Space: O(1)
