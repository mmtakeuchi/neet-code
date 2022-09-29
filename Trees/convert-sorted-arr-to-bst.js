var sortedArrayToBST = function (nums) {
  const herlper = (nums, beg, end) => {
    // If beg > end, return NULL, as we receive a wrong range...
    if (beg > end) return null;
    // set the middle node...
    var mid = Math.ceil((beg + end) / 2);
    // Initialise root node with value same as nums[mid]...
    var root = new TreeNode(nums[mid]);
    // Assign left subtrees as the same function called on left subranges...
    root.left = ConvToBST(nums, beg, mid - 1);
    // Assign right subtrees as the same function called on right subranges...
    root.right = ConvToBST(nums, mid + 1, end);
    // Return the root node...
    return root;
  };

  return helper(nums, 0, nums.length - 1);
};

// Time: O(nlogn)
// Space: O(n)
