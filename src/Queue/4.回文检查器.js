/* 回文检查器定义：有不同的算法可以检查一个词组或字符串是否为回文。最简单的方式是将字符串反向排列并
检查它和原字符串是否相同。如果两者相同，那么它就是一个回文*/

const Deque = require('./2.deque')

function palindromeChecker (aString) {
    if (aString === undefined || aString === null || (aString !== null && aString.length === 0)){
        return false
    } 
    const deque = new Deque(); // {2} 
    const lowerString = aString.toLocaleLowerCase().split(' ').join(''); // {3} 
    let isEqual = true; 
    let firstChar, lastChar; 
    for (let i = 0; i < lowerString.length; i++) { // {4} 
        deque.addBack(lowerString.charAt(i)); 
    } 
    while (deque.size() > 1 && isEqual) { // {5} 
        firstChar = deque.removeFront(); // {6} 
        lastChar = deque.removeBack(); // {7} 
        if (firstChar !== lastChar) { 
            isEqual = false; // {8} 
        } 
    } 
    return isEqual;
}

console.log('a', palindromeChecker('a')); 
console.log('aa', palindromeChecker('aa')); 
console.log('kayak', palindromeChecker('kayak')); 
console.log('level', palindromeChecker('level')); 
console.log('Was it a car or a cat I saw', palindromeChecker(`Was it a car or a cat I saw`)); 
console.log('Step on no pets', palindromeChecker('Step on no pets'));




