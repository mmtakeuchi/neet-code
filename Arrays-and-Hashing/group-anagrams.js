var groupAnagrams = function (strs) {
  const map = {};

  for (let i = 0; i < strs.length; i++) {
    const word = sortLetters(strs[i]);

    if (map[word] !== undefined) {
      map[word].push(strs[i]);
    } else {
      map[word] = [strs[i]];
    }
  }

  return Object.values(map);

  function sortLetters(word) {
    return word.split('').sort().join('');
  }
};
