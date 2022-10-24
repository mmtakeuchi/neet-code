// LeetCode #567
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  let map = {};

  for (let i = 0; i < s1.length; i++) {
    map[s1[i]] === undefined ? (map[s1[i]] = 1) : (map[s1[i]] += 1);
  }

  let left = 0;
  let right = 0;
  let requiredLength = s1.length;

  while (right < s2.length) {
    if (map[s2[right]] > 0) {
      requiredLength -= 1;
    }

    map[s2[right]] -= 1;
    right += 1;

    if (requiredLength === 0) return true;

    if (right - left === s1.length) {
      if (map[s2[left]] >= 0) {
        requiredLength += 1;
      }

      map[s2[left]] += 1;
      left += 1;
    }
  }

  return false;
};

// Time: O(n)
// Space: O(n)
