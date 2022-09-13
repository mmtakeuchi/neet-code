var combinationSum = function (candidates, target) {
  const combos = [];
  // Pass in the given args, plus combos, a currCombo array, and an index
  combinationSumHelper(candidates, target, combos, [], 0);
  return combos;
};

var combinationSumHelper = function (
  candidates,
  target,
  combos,
  currCombo,
  index
) {
  // Since we subtract from target on each recursive call, we know that
  // the base case is when target === 0 (a valid combo)
  if (target === 0) combos.push([...currCombo]);

  for (let i = index; i < candidates.length; i++) {
    // Just check to make sure the current number fits into target
    if (candidates[i] <= target) {
      // Try to use the number by pushing to currCombo
      currCombo.push(candidates[i]);
      // Recurse and subtract this number from target (now the next recursion will use the remainder)
      // and pass in i as the index because we can use this number multiple times
      combinationSumHelper(
        candidates,
        target - candidates[i],
        combos,
        currCombo,
        i
      );
      // Un-use the number so in the next iteration, you will use the next number
      currCombo.pop();
    }
  }
};

// Time: O(n^t), where t is the target value
// Space: O(n)
