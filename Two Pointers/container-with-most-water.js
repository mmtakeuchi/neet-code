var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left <= right) {
    let minHeight = Math.min(height[left], height[right]);
    let curArea = minHeight * (right - left);
    max = Math.max(max, curArea);

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return max;
};

// Time: O(n)
// Space: O(1)
