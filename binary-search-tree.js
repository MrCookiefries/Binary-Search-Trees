class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses iteration. */

	insert(val) {
		const newNode = new Node(val);
		if (this.root) {
			let currentNode = this.root;
			while (currentNode) {
				if (currentNode.val > val) {
					if (currentNode.left) {
						currentNode = currentNode.left;
					} else {
						currentNode.left = newNode;
						break;
					}
				} else {
					if (currentNode.right) {
						currentNode = currentNode.right;
					} else {
						currentNode.right = newNode;
						break;
					}
				}
			}
		} else {
			this.root = newNode;
		}
		return this;
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses recursion. */

	insertRecursively(val, currentNode = this.root) {
		if (currentNode) {
			if (currentNode.val > val) {
				if (currentNode.left) {
					this.insertRecursively(val, currentNode.left);
				} else {
					currentNode.left = new Node(val);
				}
			} else {
				if (currentNode.right) {
					this.insertRecursively(val, currentNode.right);
				} else {
					currentNode.right = new Node(val);
				}
			}
		} else if (!this.root) {
			this.root = new Node(val);
		}
		return this;
	}

	/** find(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		let currentNode = this.root;
		while (currentNode) {
			if (currentNode.val === val) {
				return currentNode;
			}
			currentNode = currentNode.val > val
				? currentNode.left
				: currentNode.right;
		}
	}

	/** findRecursively(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val, currentNode = this.root) {
		if (!currentNode) return;
		if (currentNode.val === val) return currentNode;
		return this.findRecursively(val,
			currentNode.val > val ? currentNode.left : currentNode.right
		);
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
	 * Return an array of visited nodes. */

	dfsPreOrder(node = this.root, nodes = []) {
		if (node) {
			nodes.push(node.val);
			if (node.left) this.dfsPreOrder(node.left, nodes);
			if (node.right) this.dfsPreOrder(node.right, nodes);
		}
		return nodes;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
	 * Return an array of visited nodes. */

	dfsInOrder(node = this.root, nodes = []) {
		if (node) {
			if (node.left) this.dfsInOrder(node.left, nodes);
			nodes.push(node.val);
			if (node.right) this.dfsInOrder(node.right, nodes);
		}
		return nodes;
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
	 * Return an array of visited nodes. */

	dfsPostOrder(node = this.root, nodes = []) {
		if (node) {
			if (node.left) this.dfsPostOrder(node.left, nodes);
			if (node.right) this.dfsPostOrder(node.right, nodes);
			nodes.push(node.val);
		}
		return nodes;
	}

	/** bfs(): Traverse the array using BFS.
	 * Return an array of visited nodes. */

	bfs(stack = [this.root], nodes = [],) {
		const node = stack.shift();
		if (node) {
			nodes.push(node.val);
			if (node.left) stack.push(node.left);
			if (node.right) stack.push(node.right);
			this.bfs(stack, nodes);
		}
		return nodes;
	}

	// Further Study!

	/** remove(val): Removes a node in the BST with the value val.
	 * Returns the removed node. */

	remove(val) {

	}

	/** isBalanced(): Returns true if the BST is balanced, false otherwise. */

	isBalanced() {

	}

	/** findSecondHighest(): Find the second highest value in the BST, if it exists.
	 * Otherwise return undefined. */

	findSecondHighest() {

	}
}

module.exports = BinarySearchTree;
