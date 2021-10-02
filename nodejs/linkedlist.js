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

    addOnIndex (element, i) {
        if (i > 0 && i > this.size) {
            console.log("greater than size");
            return false;
        } else {
            let node = new Node(element);
            let curr = this.head;
            let prev;

            let indexList = 0;

            if (i == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                while (indexList < i) {
                    indexList++;
                    prev = curr;
                    curr = prev.next;
                }
    
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
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

    removeFromIndex(i) {
        if (i > 0 && i > this.size) {
            console.log("greater than size");
        } else {
            let curr = this.head;
            let prev = null;
            if (i == 0) {
                this.head = curr.next;
            } else {
                let index = 0;

                while(index < i) {
                    index++
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }
        }
    }

    reverse() {
        let curr = this.head;
        let prev = null;
        while (curr.next) {
            let save = curr.next;
            curr.next = prev;
            prev = curr;
            curr = save;
        }
        this.head = curr;
        curr.next = prev;
    }
}

let abc = new linkedList();

abc.add(10);
abc.add(5);
abc.add(4);
abc.addOnIndex(8, 2);
abc.add(3);
abc.add(11);
abc.printList();
console.log("after remove: ")
abc.removeElement(5);
abc.removeFromIndex(2);
abc.printList();
console.log("after reverse: ")
abc.reverse();
abc.printList();
