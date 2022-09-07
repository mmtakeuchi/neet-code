var isSubtree = function (root, subRoot) {
  const isSame = (node1, node2) => {
    if (!node1 && !node2) return true;
    if (!node1 || !node2 || node1.val !== node2.val) return false;
    return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
  };

  const dfs = (node) => {
    if (!node) return false;
    if (isSame(node, subRoot)) return true;
    return dfs(node.left) || dfs(node.right);
  };

  return dfs(root);
};

// Time: O(M * N), where M is the number of nodes in binary tree root, N is the number of nodes in binary tree subRoot
// Space: O(H), where H is the height of binary tree root
