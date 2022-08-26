var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum > target) {
      right -= 1;
    } else if (sum < target) {
      left += 1;
    } else {
      return [left + 1, right + 1];
    }
  }
};
