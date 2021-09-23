// 进制转换
function decimalToBinary(decNumber) { 
    const remStack = new Stack(); 
    let number = decNumber; 
    let rem; 
    let binaryString = ''; 

    while (number > 0) { // {1} 
        rem = Math.floor(number % 2); // {2} 
        remStack.push(rem); // {3} 
        number = Math.floor(number / 2); // {4} 
    } 

    while (!remStack.isEmpty()) { // {5} 
        binaryString += remStack.pop().toString(); 
    } 

    return binaryString; 
}
console.log(decimalToBinary(233)); // 11101001 
console.log(decimalToBinary(10)); // 1010 
console.log(decimalToBinary(1000)); // 1111101000

// 进制转换 十进制转换成基数为 2～36 的任意进制转成二进制数
function baseConverter(decNumber, base) { 
    const remStack = new Stack(); 
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // {6} 
    let number = decNumber; 
    let rem; 
    let baseString = ''; 
    if (!(base >= 2 && base <= 36)) { 
        return ''; 
    } 
    while (number > 0) { 
        rem = Math.floor(number % base); 
        remStack.push(rem); 
        number = Math.floor(number / base); 
    } 
    while (!remStack.isEmpty()) { 
        baseString += digits[remStack.pop()]; // {7} 
    } 
    return baseString; 
}
console.log(baseConverter(100345, 2)); // 11000011111111001 
console.log(baseConverter(100345, 8)); // 303771 
console.log(baseConverter(100345, 16)); // 187F9 
console.log(baseConverter(100345, 35)); // 2BW0

