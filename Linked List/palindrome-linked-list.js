var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  // find middle (slow)
  while (fast && fast.next) {
    // middle of list
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse second half
  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  // check palindrome
  let left = head;
  let right = prev;
  while (right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }

  return true;
};

// Time: O(n)
// space: O(1)
