// LeetCode #350
var intersect = function (nums1, nums2) {
  let map = {};
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]] !== undefined) {
      map[nums1[i]] += 1;
    } else {
      map[nums1[i]] = 1;
    }
  }

  for (let j = 0; j < nums2.length; j++) {
    if (map[nums2[j]] !== undefined) {
      result.push(nums2[j]);
      map[nums2[j]] -= 1;

      if (map[nums2[j]] === 0) {
        delete map[nums2[j]];
      }
    }
  }

  return result;
};

// Time: O(n + m)
// Space: O(n)
