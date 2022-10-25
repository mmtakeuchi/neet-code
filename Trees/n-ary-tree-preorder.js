// LeetCode #589
var preorder = function (root) {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length) {
    const cur = stack.pop();

    result.push(cur.val);

    while (cur.children.length) {
      let next = cur.children.pop();
      stack.push(next);
    }
  }

  return result;
};

// Time: O(n)
// Space: O(n)
