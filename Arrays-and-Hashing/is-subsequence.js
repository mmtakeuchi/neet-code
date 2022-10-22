// LeetCode #392
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;

  let spot = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[spot] === t[i]) {
      spot += 1;
    }
  }

  return spot === s.length;
};

// Time: O(n)
// Spce: O(1)
