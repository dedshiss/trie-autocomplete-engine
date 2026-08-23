class TrieNode { constructor() { this.c = {}; this.end = false; } }
class Trie {
  constructor() { this.r = new TrieNode(); }
  insert(w) { let n = this.r; for (let ch of w) { if(!n.c[ch]) n.c[ch] = new TrieNode(); n = n.c[ch]; } n.end = true; }
}
module.exports = Trie;
