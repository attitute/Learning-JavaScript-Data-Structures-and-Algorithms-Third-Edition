
const _items = Symbol('stackItems')
// 基于array得stack  symbole实现属性私有化  
// 但是Object.getOwnPropertySymbols方法还是能获取到类里面的symbole
class Stack { 
    constructor() { 
        this[_items] = []; // {1} 
    }
    
    push(element) {
        this[_items].push(element)
    }
    
    pop() {
        this[_items].pop()
    }
    // 栈顶
    peek() {
        return this[_items][this[_items].length - 1]
    }

    isEmpty() {
        return this[_items].length === 0
    }

    size() {
        return this[_items].length
    }

    clear() {
        this[_items] = []
    }
}

const stack = new Stack()
stack.push(5)
stack.push(8)
let objSymboles = Object.getOwnPropertySymbols(stack) // 类里面声明的所有 Symbols 属性
console.log(objSymboles.length) // 1
console.log(objSymboles) // [ Symbol(stackItems) ]
console.log(objSymboles[0]) // Symbol(stackItems)
console.log(stack[objSymboles[0]]) // 输出 [5,8]
stack[objSymboles[0]].push(1); 