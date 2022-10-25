// LeetCode #22
var generateParenthesis = function (n) {
  // only add open paren if open < n
  // only add a closing paren if closed < open
  // valid if open == closed and closed == n

  let result = [];
  let stack = [];

  var backtrack = function (openN, closedN) {
    if (openN === closedN && closedN === n) {
      result.push(stack.join(''));
      return;
    }

    if (openN < n) {
      stack.push('(');
      backtrack(openN + 1, closedN);
      stack.pop();
    }

    if (closedN < openN) {
      stack.push(')');
      backtrack(openN, closedN + 1);
      stack.pop();
    }
  };

  backtrack(0, 0);
  return result;
};

// Time: O(2^N)
// Space: O(2^N)
