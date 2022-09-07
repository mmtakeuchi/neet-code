var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// BFS Iterative
var isSameTreeBFS = function (p, q) {
  const queue = [[p, q]];

  while (queue.length) {
    const [p, q] = queue.shift();

    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    if (p.left || q.left) queue.push([p.left, q.left]);
    if (p.right || q.right) queue.push([p.right, q.right]);
  }
  return true;
};

// DFS Iterative
var isSameTreeDFS = function (p, q) {
  const s = [[p, q]];

  while (s.length) {
    const [p, q] = s.pop();

    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    if (p.left || q.left) s.push([p.left, q.left]);
    if (p.right || q.right) s.push([p.right, q.right]);
  }
  return true;
};

// Time Complexity: O(n) | Where n is equal to the number of nodes in both trees. | We visit every node in worst case
// Space Complexity: O(h) | Where h is the height of the tallest tree. This is within the Call Stack | In the worst case, a tree's number of nodes is it's height.
