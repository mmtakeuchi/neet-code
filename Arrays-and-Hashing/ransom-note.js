var canConstruct = function (ransomNote, magazine) {
  const map = {};

  for (let i = 0; i < ransomNote.length; i++) {
    if (map[ransomNote[i]] === undefined) {
      map[ransomNote[i]] = 1;
    } else {
      map[ransomNote[i]] += 1;
    }
  }

  for (let j = 0; j < magazine.length; j++) {
    if (map[magazine[j]]) {
      map[magazine[j]] -= 1;

      if (map[magazine[j]] === 0) {
        delete map[magazine[j]];
      }
    }
  }

  return Object.keys(map).length === 0;
};

// Time Complexity: O(m + n)
// Space Complexity: O(1)
