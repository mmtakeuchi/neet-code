// LeetCode #394
var decodeString = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let cur = s[i];

    if (cur !== ']') {
      stack.push(cur);
    } else {
      let substr = '';

      while (stack[stack.length - 1] !== '[') {
        substr = stack.pop() + substr;
      }

      stack.pop();

      let k = '';

      while (stack.length && !isNaN(stack[stack.length - 1])) {
        k = stack.pop() + k;
      }

      stack.push(substr.repeat(k));
    }
  }

  return stack.join('');
};

// Time: O(n)
// Space: O(n)
