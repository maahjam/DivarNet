class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (current) {
            if (new Date(value.date) == new Date(current.value.date)) return undefined;
            if (new Date(value.date) < new Date(current.value.date)) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(date) {
        if (!this.root) return false

        let current = this.root;
        let founds = [];
        while (current) {
            if (new Date(date) < new Date(current.value.date)) {
                if (current.left) {
                    current = current.left;
                } else {
                    break;
                }
            } else if (new Date(date) > new Date(current.value.date)) {
                if (current.right) {
                    current = current.right;
                } else {
                    break;
                }
            } else {
                founds.push(current.value);
                break;
            }
        }

        return founds;

    }

}