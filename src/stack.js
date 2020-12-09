class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.head = null
    }

    push(val) {
        let newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
    }

    pop() {
        //if empty stack
        if (!this.head)
            return null

        let oldHead = this.head
        this.head = this.head.next
        return oldHead.val
    }
}

let stack = new Stack()

stack.push(11)
stack.push(14)
stack.push(15)
stack.push(18)
stack.push(20)
stack.push(22)

stack.pop()
stack.pop()

while (stack.head) {
    console.log(stack.head.val)
    stack.head = stack.head.next
}
