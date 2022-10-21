var rotate = function (nums, k) {
  // i.e. nums = [1, 2, 3, 4, 5, 6, 7],  k = 3
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
    // i = 6,  k = 3
    // nums[i + k] = nums[i]
    // nums[6 + 3] = nums[6]
    // nums[9] = 7              nums = [1, 2, 3, 4, 5, 6, 7, , , 7]

    // i = 5,  k = 3
    // nums[i + k] = nums[i]
    // nums[5 + 3] = nums[5]
    // nums[8] = 6              nums = [1, 2, 3, 4, 5, 6, 7, , 6, 7]

    // i = 4,  k = 3
    // nums[i + k] = nums[i]
    // nums[4 + 3] = nums[4]
    // nums[7] = 5              nums = [1, 2, 3, 4, 5, 6, 7, 5, 6, 7]

    // i = 3,  k = 3
    // nums[i + k] = nums[i]
    // nums[3 + 3] = nums[3]
    // nums[6] = 4              nums = [1, 2, 3, 4, 5, 6, 4, 5, 6, 7]

    // i = 2,  k = 3
    // nums[i + k] = nums[i]
    // nums[2 + 3] = nums[2]
    // nums[5] = 3              nums = [1, 2, 3, 4, 5, 3, 4, 5, 6, 7]

    // i = 1,  k = 3
    // nums[i + k] = nums[i]
    // nums[1 + 3] = nums[1]
    // nums[4] = 2              nums = [1, 2, 3, 4, 2, 3, 4, 5, 6, 7]

    // i = 0,  k = 3
    // nums[i + k] = nums[i]
    // nums[0 + 3] = nums[0]
    // nums[3] = 1              nums = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7]
  }

  for (let j = k - 1; j >= 0; j--) {
    // nums = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7]
    nums[j] = nums.pop();

    // j = 2
    // nums[j] = nums.pop()
    // nums[2] = 7               nums = [1, 2, 7, 1, 2, 3, 4, 5, 6]

    // j = 1
    // nums[j] = nums.pop()
    // nums[1] = 6               nums = [1, 6, 7, 1, 2, 3, 4, 5]

    // j = 0
    // nums[j] = nums.pop()
    // nums[0] = 5               nums = [5, 6, 7, 1, 2, 3, 4]
  }

  // nums = [5, 6, 7, 1, 2, 3, 4]
};

// Time comlexity = O(a + b)
