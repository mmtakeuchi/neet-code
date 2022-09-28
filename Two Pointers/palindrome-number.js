var isPalindrome = function (x) {
  if (x < 0) return false;

  let str = x.toString();

  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    let start = str[left];
    let end = str[right];

    if (start !== end) return false;
    left += 1;
    right -= 1;
  }

  return true;
};

// Time: O(n), n being amount of digits
// Space: O(1)
