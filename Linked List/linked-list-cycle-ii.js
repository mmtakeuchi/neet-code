// LeetCode #142
var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      let cur = head;

      while (cur !== fast) {
        cur = cur.next;
        fast = fast.next;
      }

      return cur;
    }
  }

  return null;
};

// Time: O(n)
// Space: O(1)
