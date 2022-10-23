// LeetCode #409
var longestPalindrome = function (s) {
  let chars = {};
  let len = 0;

  for (let i = 0; i < s.length; i++) {
    let cur = s[i];

    if (chars[cur] === 1) {
      delete chars[cur];
      len += 2;
    } else {
      chars[cur] = 1;
    }
  }

  const extraChar = Object.keys(chars).length > 0 ? 1 : 0;

  return len + extraChar;
};

// Time: O(n)
// Space: O(n)
