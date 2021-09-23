const Queue = require('./1.Queue')
console.log('434',Queue)

// 循环队列 将最后一样删除插入第一项 根据传入的次数循环
function hotPotato(elementsList, num) { 
    const queue = new Queue();
    const elimitatedList = []; 
    for (let i = 0; i < elementsList.length; i++) { 
        queue.enqueue(elementsList[i]); 
    } 
    while (queue.size() > 1) { 
        for (let i = 0; i < num; i++) { 
            queue.enqueue(queue.dequeue());
        } 
        elimitatedList.push(queue.dequeue());
    } 
    return { 
        eliminated: elimitatedList, 
        winner: queue.dequeue()
    }; 
}
const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']; 
const result = hotPotato(names, 7);
result.eliminated.forEach(name => { 
    console.log(`${name}在击鼓传花游戏中被淘汰。`); 
}); 
console.log(`胜利者： ${result.winner}`);

