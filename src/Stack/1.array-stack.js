
// 基于array得Stack
class Stack { 
    constructor() { 
        this.items = []; // {1} 
    }
    
    push(element) {
        this.items.push(element)
    }
    
    pop() {
        this.items.pop()
    }
    // 栈顶
    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    clear() {
        this.items = []
    }

    print() {
        return this.items
    }
}
const stack = new Stack()
stack.push(1)
console.log(stack.print()) // 1
console.log(stack)