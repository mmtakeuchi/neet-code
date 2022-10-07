var wordBreak = function (s, wordDict) {
  let wordSet = new Set(wordDict);
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  canBreak(s, wordSet, dp);

  return dp[s.length];
};

var canBreak = (s, wordSet, dp) => {
  for (let end = 1; end <= s.length; end++) {
    checkWord(s, wordSet, end, dp);
  }
};

var checkWord = (s, wordSet, end, dp) => {
  for (let start = 0; start < end; start++) {
    const word = s.slice(start, end);
    const canBreak = dp[start] && wordSet.has(word);
    if (!canBreak) continue;

    dp[end] = true;

    return;
  }
};

// Time: O(N^3)
// Space: O(N)
