var longestPalindrome = function (s) {
  let chars = new Set();
  let result = 0;

  for (let char of s) {
    if (chars.has(char)) {
      result += 2;
      chars.delete(char);
    } else {
      chars.add(char, 1);
    }
  }

  return result + (chars.size > 0 ? 1 : 0);
};

// Time: O(n)
// Space: O(n)
