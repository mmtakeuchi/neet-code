var productExceptSelf = function (nums) {
  const result = [];
  let left = 1;
  let right = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left *= nums[i];
  }

  console.log(result);

  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= right;
    right *= nums[j];
  }

  return result;
};
