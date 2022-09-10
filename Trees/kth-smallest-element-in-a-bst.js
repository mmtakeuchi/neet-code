// Iterative (Inorder)
var kthSmallestIter = function (root, k) {
  let n = 0;
  const stack = [];
  let cur = root;

  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop();
    n += 1;

    if (n === k) return cur.val;

    cur = cur.right;
  }
};

// Recursive (Inorder)
var kthSmallestRecur = function (root, k) {
  const dfs = (root) => {
    if (!root) return [];

    return [...dfs(root.left), root.val, ...dfs(root.right)];
  };

  const inOrder = dfs(root);

  return inOrder[k - 1];
};

// Time: O(n)
// Space: O(n)
