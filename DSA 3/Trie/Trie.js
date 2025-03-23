class TrieNode {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let currentNode = this.root

        for (let char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode()
            }
            currentNode = currentNode.children[char]
        }
        currentNode.isEnd = true
    }

    search(word) {
        let currentNode = this.root

        for (let char of word) {
            if (!currentNode.children[char]) {
                return false
            }
            currentNode = currentNode.children[char]
        }
        return currentNode.isEnd
    }

    startsWith(prefix) {
        let currentNode = this.root

        for (let char of prefix) {
            if (!currentNode.children[char]) return false
            currentNode = currentNode.children[char]
        }
        return true
    }

    autoComplete(prefix) {
        let currentNode = this.root
        let words = []

        for (let char of prefix) {
            if (!currentNode.children[char]) {
                return []
            }
            currentNode = currentNode.children[char]
        }
        this.CollectWords(prefix, words, currentNode)
        return words
    }

    CollectWords(prefix, words, currentNode) {

        if (currentNode.isEnd) {
            words.push(prefix)
        }

        for (let key in currentNode.children) {
            this.CollectWords(prefix + key, words, currentNode.children[key])

        }

    }


}
const trie = new Trie();
trie.insert("hcat");
trie.insert("hello")
console.log(trie.search("cat"))
console.log(trie.autoComplete("h"));

