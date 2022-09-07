var levelOrder = function (root) {
  if (!root) return [];

  const queue = [root]; // initialize the queue with root
  const levels = []; // declare output array

  while (queue.length) {
    const queueLength = queue.length; // Get the length prior to dequeueing
    const currLevel = []; // Declare this level
    // loop through to exhaust all options and only to include nodes at currLevel
    for (let i = 0; i < queueLength; i++) {
      // Get next node
      const current = queue.shift();

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      // After we add left and right for current, we add to currLevel
      currLevel.push(current.val);
    }
    // Level has been finished. Push into output array
    levels.push(currLevel);
  }
  return levels;
};

// Time Complexity: O(N) where N is the number of nodes in the binary tree
// Space Complexity: O(N) for our answer array
