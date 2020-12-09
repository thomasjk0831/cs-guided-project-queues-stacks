class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
    }

    enqueue(val) {
        //create new node
        let newNode = new Node(val)
        //if queue is empty
        if (this.head === null && this.tail === null) {
            this.head = newNode
            this.tail = newNode
        }
        //add new node to queue
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    dequeue() {
        //check if queue is empty
        if (this.head === null && this.tail === null)
            return null
        //if only one element in queue
        if (this.head === this.tail) {
            let oldHead = this.head
            this.head = null
            this.tail = null
            return oldHead.val
        }
        else {
            let oldHead = this.head
            this.head = this.head.next
            return oldHead.val
        }
    }
}

// let queue = new Queue()
// queue.enqueue(15)
// queue.enqueue(22)
// queue.enqueue(27)

// queue.dequeue()
// queue.dequeue()

// console.log(queue.head.val)