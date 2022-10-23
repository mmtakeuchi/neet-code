// LeetCode #367
var isPerfectSquare = function (num) {
  let low = 0;
  let high = num;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    let prod = mid * mid;

    if (prod === num) {
      return true;
    } else if (prod > num) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return false;
};

// Time: O(logN)
// Space: O(1)
