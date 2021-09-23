// weakMap 使属性私有  键是对像 值可以是任意类型
const items = new WeakMap()

class Stack {
    constructor () {
        items.set(this, [])
    }

    push(element) {
        const s = items.get(this)
        s.push(element)
    }

    pop(){
        const s = items.get(this)
        const r = this.s.pop()
        return r
    }
    
    // 栈顶
    peek() {
        const s = items.get(this)
        return s[s.length - 1]
    }

    isEmpty() {
        const s = items.get(this)
        return s.length === 0
    }

    size() {
        const s = items.get(this)
        return s.length
    }

    clear() {
        items.set(this, [])
    }

    print() {
        const s = items.get(this)
        return s   
    }
}
const stack = new Stack()
stack.push(1)
console.log(stack.print()) // 1
console.log(stack)