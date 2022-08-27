var evalRPN = function (tokens) {
  let stack = [];
  let ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)),
  };

  tokens.forEach((token) => {
    if (ops[token]) {
      let top = stack.pop();
      let second = stack.pop();
      stack.push(ops[token](second, top));
    } else {
      stack.push(Number(token));
    }
  });

  return stack.pop();
};
