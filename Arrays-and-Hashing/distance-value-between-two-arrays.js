// Leetcode #1385
var findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0;

  for (let i = 0; i < arr1.length; i++) {
    let addCount = true;
    for (let j = 0; j < arr2.length; j++) {
      let dif = Math.abs(arr1[i] - arr2[j]);

      if (dif <= d) {
        addCount = false;
      }
    }

    if (addCount) count += 1;
  }

  return count;
};

// Time: O(n + m)
// Space: O(1)
