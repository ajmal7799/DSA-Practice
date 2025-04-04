class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null

  }
}
class BinarySearchTree {
  constructor() {
    this.root = null
  }
  isEmpty() {
    return this.root == null
  }

  insert(value) {
    const newNode = new Node(value)
    if (this.isEmpty()) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left == null) {
        root.left = newNode
      } else {
        this.insertNode(root.left, newNode)
      }
    } else {
      if (root.right == null) {
        root.right = newNode
      } else {
        this.insertNode(root.right, newNode)
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false
    } else {
      if (root.value == value) {
        return true
      } else if (value < root.value) {
        return this.search(root.left, value)
      } else {
        return this.search(root.right, value)
      }
    }
  }

  // dfs

  preOrder(root) {
    if (root) {
      console.log(root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left)
      console.log(root.value)
      this.inOrder(root.right)
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.value)
    }
  }

  // BFS traversal
  levelOrder() {
    let queue = []
    queue.push(this.root)

    while (queue.length) {
      let curr = queue.shift()
      console.log(curr.value)
      if (curr.left) {
        queue.push(curr.left)
      }
      if (curr.right) {
        queue.push(curr.right)
      }
    }
  }



  min(root) {
    if (!root.left) {
      return root.value
    } else {
      return this.min(root.left)
    }
  }

  max(root) {
    if (!root.right) {
      return root.value
    } else {
      return this.min(root.right)
    }
  }


  delete(value) {
    this.root = this.deleteNode(this.root, value)
  }

  deleteNode(root, value) {
    if (root == null) {
      return root
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value)
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value)
    } else {

      if (!root.left && !root.right) return null
      if (!root.right) return root.left
      if (!root.left) return root.right

      root.value = this.min(root.right)
      root.right = this.deleteNode(root.right, root.value)
    }
    return root
  }

  findLargest() {
    let count = 0
    let largest = null
    function inOrder(root) {
      if (!root) return

      inOrder(root.right)
      count++
      if (count == 3) {
        largest = root.value
        return
      }
      inOrder(root.left)
    }

    inOrder(this.root)
    return largest
  }

  height(root) {
    if (!root) {
      return -1
    }
    let leftHeight = this.height(root.left)
    let rightHeight = this.height(root.right)
    return Math.max(leftHeight, rightHeight) + 1
  }



}

const bst = new BinarySearchTree()
console.log("Tree is empty", bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)


bst.levelOrder()
bst.delete(10)
bst.levelOrder()
