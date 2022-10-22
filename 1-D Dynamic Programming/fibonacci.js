var fib = function (n) {
  if (n <= 1) return n;

  let first = 1;
  let second = 0;
  let cur;

  for (let i = 2; i <= n; i++) {
    cur = first + second;
    second = first;
    first = cur;
  }

  return cur;
};

// Time: O(n)
// Space: O(1)
