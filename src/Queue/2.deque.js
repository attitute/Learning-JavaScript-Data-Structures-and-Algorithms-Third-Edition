// 双端队列
class Deque { 
    constructor() { 
        this.count = 0; 
        this.lowestCount = 0; 
        this.items = {}; 
    } 
    /* 允许负数得存在 */
    // addFront(element) {
    //     if(this.isEmpty()) {
    //         this.addBack()
    //     } else {
    //         this.items[--this.lowestCount] = element
    //         this.count++
    //     }
    // }

    /* 不允许负数得存在 */
    addFront(element) {
        if(this.isEmpty()) {
            this.addBack()
        } else if (this.lowestCount > 0){
            this.items[--this.lowestCount] = element
            this.count++
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1]; 
            } 
            this.count++; 
            this.lowestCount = 0; 
            this.items[0] = element;
        }
    }

    addBack(element) {
        this.items[this.count] = element
        this.count++
    }

    removeFront (){
        if(this.isEmpty()) undefined
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result

    }

    removeBack(){
        if(this.isEmpty()) undefined
        const result = this.items[this.count]
        delete this.items[this.count]
        this.count--
        return result
    }

    peekFront(){
        if(this.isEmpty()) undefined
        return this.items[this.lowestCount]
    }

    peekFront(){
        if(this.isEmpty()) undefined
        return this.items[this.count]
    }

    isEmpty(){ 
        return this.size() === 0;
    }

    size(){ 
        return this.count - this.lowestCount;
    }

    clear(){
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    
    toString() { 
        if (this.isEmpty()) { 
            return ''; 
        } 
        let objString = `${this.items[this.lowestCount]}`; 
        for (let i = this.lowestCount + 1; i < this.count; i++) { 
            objString = `${objString},${this.items[i]}`; 
        } 
        return objString; 
    }
}
module.exports = Deque

const deque = new Deque(); 
console.log(deque.isEmpty()); // 输出 true 
deque.addBack('John'); 
deque.addBack('Jack'); 
console.log(deque.toString()); // John, Jack 
deque.addBack('Camila'); 
console.log(deque.toString()); // John, Jack, Camila 
console.log(deque.size()); // 输出 3 
console.log(deque.isEmpty()); // 输出 false 
deque.removeFront(); // 移除 John 
console.log(deque.toString()); // Jack, Camila 
deque.removeBack(); // Camila 决定离开
console.log(deque.toString()); // Jack 
deque.addFront('John'); // John 回来询问一些信息
console.log(deque.toString()); // John, Jack

