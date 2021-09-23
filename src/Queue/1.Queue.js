// 队列
class Queue { 
    constructor() { 
        this.count = 0; // 队列最大一项
        this.lowestCount = 0; // 第一项
        this.items = {};
    } 

    enqueue(element) {
        this.items[this.count] = element
        this.count++
    }

    dequeue(){
        if(this.isEmpty()) undefined
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    peek(){
        if(this.isEmpty()) undefined
        return this.items[this.lowestCount]
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
module.exports = Queue
const queue = new Queue(); 
console.log(queue.isEmpty()); // true
queue.enqueue('John'); 
queue.enqueue('Jack'); 
console.log(queue.toString()); // John,Jack
queue.enqueue('Camila');
console.log(queue.toString()); // John, Jack, Camila 
console.log(queue.size()); // 3 
console.log(queue.isEmpty()); // false 
queue.dequeue(); // 移除 John 
queue.dequeue(); // 移除 Jack 
console.log(queue.toString()); // Camila
