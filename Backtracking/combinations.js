var combine = function (n, k) {
  let result = [];

  var backtrack = function (start = 1, combination = []) {
    if (combination.length == k) {
      result.push([...combination]);
    }
    if (combination.length < k)
      for (let i = first; i <= n; i++) {
        combination.push(i);
        backtrack(i + 1, combination);
        combination.pop();
      }
  };

  backtrack();
  return result;
};
