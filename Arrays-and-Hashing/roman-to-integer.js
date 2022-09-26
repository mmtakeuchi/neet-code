var romanToInt = function (s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num = 0;

  for (let i = 0; i < s.length; i++) {
    let current = values[s[i]];
    let next = values[s[i + 1]];

    if (next && current < next) {
      num += next - current;
      i += 1;
    } else {
      num += current;
    }
  }

  return num;
};

// Time: O(n)
// Space: O(1)
