class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode;
    }

    getSize() {
        return this.size;
    }

    printList() {
        let curr = this.head;
        if (curr) {
            while (curr.next) {
                console.log(curr.element);
                curr = curr.next;
            }
            console.log(curr.element);
        } else {
            console.log("empty");
        }
    }

    add(element) {
        let node = new Node(element);
        let lastNode = this.getLast();
        if (lastNode == null) {
            this.head = node
        } else {
            lastNode.next = node;
        }
        this.size++;
    }

    removeElement(element) {
        let curr = this.head;
        let prev = null;
        while(curr) {
            if (curr.element == element) {
                if (prev == null) {
                    this.head = curr.next;
                } else {
                    prev.next = curr.next;
                }
                this.size--;
            }
            prev = curr;
            curr = curr.next;
        }
    }
}

let abc = new linkedList();

abc.add(10);
abc.add(5);
abc.add(4);
abc.add(3);
abc.removeElement(5);
abc.printList();