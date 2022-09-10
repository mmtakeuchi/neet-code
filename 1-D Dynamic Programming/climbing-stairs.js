var climbStairs = function (n) {
  let dp1 = 1;
  let dp2 = 1;

  for (let i = 2; i <= n; i++) {
    let temp = dp2;
    dp2 = dp2 + dp1;
    dp1 = temp;
  }

  return dp2;
};

// Time: O(n)
// Space: O(n)
