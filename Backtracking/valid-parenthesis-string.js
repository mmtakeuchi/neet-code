// LeetCode #678
var checkValidString = function (s) {
  let cMin = 0;
  let cMax = 0;
  // open parentheses count in range [cmin, cmax]

  for (let i = 0; i < s.length; i++) {
    let cur = s[i];

    if (cur === '(') {
      cMin++;
      cMax++;
    } else if (cur === ')') {
      cMin--;
      cMax--;
    } else {
      cMax++; // if `*` become `(` then openCount++
      cmin--; // if `*` become `)` then openCount--
      // if `*` become `` then nothing happens
      // So openCount will be in new range [cmin-1, cmax+1]
    }

    if (cmax < 0) return false; // Currently, don't have enough open parentheses to match close parentheses-> Invalid
    // For example: ())(
    cmin = Math.max(cmin, 0); // It's invalid if open parentheses count < 0 that's why cmin can't be negative
  }

  return cMin === 0; // Return true if can found `openCount == 0` in range [cmin, cmax]
};

// Time: O(n)
// Space: O(1)
