var isPalindrome = function (s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const newArr = s
    .split('')
    .filter((char) => alphabet.includes(char.toLowerCase()));

  let left = 0;
  let right = newArr.length - 1;

  while (left <= right) {
    if (newArr[left].toLowerCase() !== newArr[right].toLowerCase()) {
      return false;
    }

    left += 1;
    right -= 1;
  }

  return true;
};

// Time: O(n)
// Space: O(1)
