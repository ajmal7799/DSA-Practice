class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key) {
        let result = 0
        for (let i = 0; i < key.length; i++) {
            result += key.charCodeAt(i)
        }
        return result % this.size
    }

    set(key, value) {
        let index = this.hash(key)
        while (this.table[index] !== undefined) {
            index = (index + 1) % this.size
        }
        this.table[index] = [key, value]
    }

    get(key) {
        let index = this.hash(key)
        while (this.table[index] !== undefined && this.table[index][0] !== key) {
            if (this.table[index][0] == key) {
                return this.table[index][1]
            }
            index = (index + 1) % this.table
        }
        return undefined
    }
}