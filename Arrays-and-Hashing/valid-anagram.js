var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const longest = s.length > t.length ? s : t;
  const shortest = longest === s ? t : s;

  const map = {};

  for (let i = 0; i < longest.length; i++) {
    if (map[longest[i]] === undefined) {
      map[longest[i]] = 1;
    } else {
      map[longest[i]] += 1;
    }
  }

  for (j = 0; j < shortest.length; j++) {
    if (map[shortest[j]]) {
      map[shortest[j]] -= 1;

      if (map[shortest[j]] === 0) {
        delete map[shortest[j]];
      }
    } else {
      return false;
    }
  }

  return Object.values(map).length === 0;
};
