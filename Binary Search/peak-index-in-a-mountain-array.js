// LeetCode #852
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid]) {
      return mid;
    } else if (arr[mid - 1] > arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

// Time: O(logN)
// Space: O(1
