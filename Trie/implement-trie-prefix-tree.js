var Trie = function () {
  this.root = {};
};

Trie.prototype.insert = function (word) {
  let node = this.root;

  for (let char of word) {
    if (node[char] === undefined) {
      node[char] = {};
    }

    node = node[char];
  }

  node.isWord = true;
};
// Time: O(m), m = length of key
// Space: O(m)

Trie.prototype.search = function (word) {
  let node = this.root;

  for (let char of word) {
    if (!node[char]) return false;

    node = node[char];
  }

  return node.isWord === true;
};
// Time: O(m), m = length of key
// Space: O(1)

Trie.prototype.startsWith = function (prefix) {
  let node = this.root;

  for (let char of prefix) {
    if (!node[char]) return false;

    node = node[char];
  }

  return true;
};
// Time: O(m), m = length of key
// Space: O(1)
