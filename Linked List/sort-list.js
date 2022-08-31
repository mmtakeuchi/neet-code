var sortList = function (head) {
  if (!head || !head.next) return head;

  let left = head;
  let right = getMid(head);
  let temp = right.next;
  right.next = null;
  right = temp;

  left = sortList(left);
  right = sortList(right);
  return merge(left, right);
};

const getMid = (node) => {
  let slow = node;
  let fast = node.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const merge = (list1, list2) => {
  let list = new ListNode(null);
  let tail = list;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }

    tail = tail.next;
  }

  if (list1) {
    tail.next = list1;
  } else {
    tail.next = list2;
  }

  return list.next;
};

// Time Complexity: O(nlogn)
// Space Complexity: O(nlogn)
