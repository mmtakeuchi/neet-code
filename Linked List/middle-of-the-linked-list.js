var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// Time Complexity : O(N), we only traverse the list till end once
// Space Complexity : O(1)
