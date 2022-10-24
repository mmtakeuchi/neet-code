// LeetCode #134
var canCompleteCircuit = function (gas, cost) {
  let start = 0;
  let totalGas = 0;
  let curGas = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i] - cost[i];
    curGas += gas[i] - cost[i];

    if (curGas < 0) {
      start = i + 1;
      curGas = 0;
    }
  }

  return 0 <= totalGas ? start : -1;
};

// Time: O(n)
// Space: O(1)
