var solution = function (isBadVersion) {
  return function (n) {
    let start = 0;
    let end = n;
    let bad;

    while (start <= end) {
      let mid = Math.floor((start + (end - start)) / 2); // to avoid overflow incase (start+end)>2147483647

      if (isBadVersion(mid)) {
        bad = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return bad;
  };
};

// Time: O(logn)
// Space: O(1)
