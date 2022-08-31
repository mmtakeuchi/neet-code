var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) break;
  }

  let check = 0;

  while (true) {
    slow = nums[slow];
    check = nums[check];

    if (slow === check) {
      return slow;
    }
  }
};

// Floyd's Algorithm
// Time Complexity: O(n)
// Space Complexity: O(1)
