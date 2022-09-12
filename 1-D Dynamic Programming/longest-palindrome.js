var longestPalindrome = function (s) {
  let longest = '';

  const expandFromCenter = (left, right) => {
    while (left >= 0 && s[left] === s[right]) {
      if (right - left + 1 > longest.length) {
        longest = s.slice(left, right + 1);
      }

      left -= 1;
      right += 1;
    }
  };

  for (let i = 0; i < s.length; i++) {
    // odd
    expandFromCenter(i, i);
    //even
    expandFromCenter(i, i + 1);
  }

  return longest;
};

// Time: O(n^2)
// Space: O(1)
