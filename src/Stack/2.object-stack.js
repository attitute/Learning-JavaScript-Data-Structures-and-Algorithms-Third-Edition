
// 基于aobject得stack
class stack { 
    constructor() {  
        this._count = 0; 
        this._items = {};
    }
    
    push(element) {
        this._items[this._count] = element;
        this._count++
    }
    
    pop() {
        if(this.isEmpty())undefined
        this._count--
        const result = this._items[this._count]
        delete this._items[this._count]
        return result
    }
    // 栈顶
    peek() {
        if(this.isEmpty())undefined
        return this._items[this._count - 1]
    }

    isEmpty() {
        return this._count === 0
    }

    size() {
        return this._count
    }

    clear() {
        this._items = {}
        this._count = 0
    }

    toString(){
        if (this.isEmpty()) ''
        let objString = `${this._items[0]}`;
        for (let i = 1; i < this._count; i++) {
            objString = `${objString},${this._items[i]}`;
        }
        return objString
    }
}