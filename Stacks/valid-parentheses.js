var isValid = function (s) {
  const parens = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (parens[s[i]]) {
      stack.push(parens[s[i]]);
    } else if (stack.pop() !== s[i]) {
      return false;
    }
  }

  return stack.length === 0;
};
