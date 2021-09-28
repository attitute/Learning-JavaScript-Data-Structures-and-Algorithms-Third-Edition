// 每个元素由一个储存元素本身得节点和一个指向下一个元素的引用组成 这些元素在一起叫链表

//节点
class Node { 
    constructor(element) { 
        this.element = element; 
        this.next = undefined; 
    } 
}

// 比较两个元素是否想同
function defaultEquals(a, b) { 
    return a === b; 
}

// 链表
export default class LinkedList { 
    constructor(equalsFn = defaultEquals) { 
        this.count = 0 // 链表长度
        this.head = undefined // 链表的头
        this.equalsFn = equalsFn // 元素相等判断
    }

    // 添加元素
    push(element) { 
        const node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node; 
        } else { 
            current = this.head;
            while (current.next != null) {
                current = current.next; 
            } 
            // 将其 next 赋为新元素，建立链接
            current.next = node;
        } 
        this.count++;
    }

}

