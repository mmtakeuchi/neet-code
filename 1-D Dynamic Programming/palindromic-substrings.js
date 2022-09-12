var countSubstrings = function (s) {
  let result = 0;

  const expand = (str, left, right) => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      result += 1;
      left -= 1;
      right += 1;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expand(s, i, i); //odd
    expand(s, i, i + 1); //even
  }

  return result;
};

// Time: O(n^2)
// Space: O(1)
