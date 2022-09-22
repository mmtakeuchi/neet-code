var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    } else if (prices[i] - buy > profit) {
      profit = prices[i] - buy;
    }
  }

  return profit;
};

var maxProfit2 = function (prices) {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};

//  Time: O(n)
//  Space: O(1)
