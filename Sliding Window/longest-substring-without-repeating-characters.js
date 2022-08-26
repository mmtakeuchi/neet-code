var lengthOfLongestSubstring = function (s) {
  let cur = [];
  let longest = 0;
  let left = 0;

  while (left < s.length) {
    if (!cur.includes(s[left])) {
      cur.push(s[left]);
      left += 1;

      if (cur.length > longest) {
        longest = cur.length;
      }
    } else {
      cur.shift();
    }
  }

  return longest;
};
