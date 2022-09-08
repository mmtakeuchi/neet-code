// Recursive
var isValidBSTRecur = function (root) {
  const validate = (node, low = -Infinity, high = Infinity) => {
    if (!node) return true;

    if (node.val <= low || node.val >= high) return false;

    return (
      validate(node.left, low, node.val) && validate(node.right, node.val, high)
    );
  };

  return validate(root);
};

// Iterative
var isValidBSTIter = function (root) {
  if (!root) return true;

  const stack = [[root, -Infinity, Infinity]];

  while (stack.length) {
    const [root, low, high] = stack.pop();

    if (!root) {
      continue;
    }

    if (root.val <= low || root.val >= high) {
      return false;
    }

    stack.push([root.right, root.val, high]);
    stack.push([root.left, low, root.val]);
  }

  return true;
};

// Time: O(n)
// Space: O(n)
