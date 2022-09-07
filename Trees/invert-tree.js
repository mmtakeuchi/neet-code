// Recursive
var invertTree = function (root) {
  if (!root) return null;

  let left = root.left;
  let right = root.right;

  root.left = invertTree(right);
  root.right = invertTree(left);

  return root;
};

// Time Complexity: O(n)
// Space complexity: O(h) where h is the height of the tree.

// Iterative

const swap = (node) => {
  const { left, right } = node;
  node.left = right;
  node.right = left;
};

// Queue (BFS)
const invertTreeUsingQueue = (root) => {
  //Base case
  if (root === null) {
    return;
  }

  //Create a queue and add the root at the top
  const q = [root];

  //iterate till queue has any node
  while (q.length) {
    //get top node
    const curr = q.pop();

    //Swap left child with right child of the node
    swap(curr);

    //Push left child to the queue
    if (curr.left !== null) {
      q.unshift(curr.left);
    }

    //Push right child to the queue
    if (curr.right !== null) {
      q.unshift(curr.right);
    }
  }
};

// Stack (DFS)
const invertTreeUsingStack = (root) => {
  //Base case
  if (root === null) {
    return;
  }

  //Create a stack and add the root node at the top
  const s = [root];

  //iterate till stack has any node
  while (s.length) {
    //get top node from stack
    const curr = s.shift();

    //Swap left child with right child of the node
    swap(curr);

    //Push left child to the stack
    if (curr.left !== null) {
      s.unshift(curr.left);
    }

    //Push right child to the stack
    if (curr.right !== null) {
      s.unshift(curr.right);
    }
  }
};

/*
For both iterative solutions
Time complexity: O(n).
Space complexity: O(n).
*/
