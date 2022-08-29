var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  let result = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let hours = piles.reduce((sum, cur) => sum + Math.ceil(cur / mid), 0);

    // for (let pile of piles) {
    //     hours += Math.ceil(pile/mid)
    // }

    if (hours <= h) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};
