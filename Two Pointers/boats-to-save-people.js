var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let low = 0;
  let high = people.length - 1;
  let minBoats = 0;

  while (low <= high) {
    let peeps = people[low] + people[high];

    if (peeps <= limit) {
      low += 1;
      high -= 1;
    } else {
      high -= 1;
    }

    minBoats += 1;
  }

  return minBoats;
};

// Time: O(nlogn)
// Space: O(1)
