// Leetcode #205
var isIsomorphic = function (s, t) {
  const mapS = {};
  const mapT = {};

  for (let idx = 0; idx < s.length; idx++) {
    if (mapS[s[idx]] !== mapT[t[idx]]) return false;

    mapS[s[idx]] = idx;
    mapT[t[idx]] = idx;
  }

  return true;
};

// Time: O(n)
// Space: O(n)
