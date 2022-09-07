// Iterative (BFS)
var maxDepthIter = function (root) {
  if (!root) return 0;

  let levels = 0;
  let queue = [];

  queue.push(root);

  while (queue.length > 0) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }

    levels++;
  }

  return levels;
};

// Recursive (DFS)
var maxDepthRecur = function (root) {
  let maxDepth = 0;

  let DFS = (node, depth) => {
    if (!node) return maxDepth;
    if (depth > maxDepth) maxDepth = depth;
    DFS(node.right, depth + 1);
    DFS(node.left, depth + 1);
  };

  DFS(root, 1);

  return maxDepth;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
