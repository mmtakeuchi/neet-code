// LeetCode #518
var change = function (amount, coins) {
  let tabu = new Array(amount + 1).fill(0);
  tabu[0] = 1;

  search(amount, coins, tabu);

  return tabu[amount];
};

var search = (amount, coins, tabu) => {
  for (const coin of coins) {
    for (let i = 0; i < amount + 1; i++) {
      if (coin > i) continue;

      tabu[i] += tabu[i - coin];
    }
  }
};

// Time: O(n * amount)
// Space: O(amount);
