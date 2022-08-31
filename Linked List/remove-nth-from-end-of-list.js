var removeNthFromEnd = function (head, n) {
  let slow = head;
  let fast = head;

  while (n > 0) {
    fast = fast.next;
    n -= 1;
  }

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next ? slow.next.next : undefined;

  return head;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
