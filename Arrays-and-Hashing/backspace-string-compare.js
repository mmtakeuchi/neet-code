var backspaceCompare = function (s, t) {
  let sStr = '';
  let tStr = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      sStr = sStr.slice(0, sStr.length - 1);
    } else {
      sStr += s[i];
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (t[j] === '#') {
      tStr = tStr.slice(0, tStr.length - 1);
    } else {
      tStr += t[j];
    }
  }

  return sStr === tStr;
};

// Time: O(n)
// Space: O(n)
