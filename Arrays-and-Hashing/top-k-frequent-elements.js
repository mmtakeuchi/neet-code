const map = {};

for (let i = 0; i < nums.length; i++) {
  if (map[nums[i]] === undefined) {
    map[nums[i]] = 1;
  } else {
    map[nums[i]] += 1;
  }
}

const sortedNums = Object.keys(map).sort((a, b) => map[b] - map[a]);

return sortedNums.slice(0, k);
