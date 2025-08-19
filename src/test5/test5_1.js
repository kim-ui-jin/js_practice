// toString(): 10진수를 2진수, 16진수 등으로 변환하여 문자열로 반환

let num = 10;
let num2 = 255;

console.log(typeof(num.toString())); // "string"
console.log(num.toString()); // "10"
console.log(num.toString(2)); // "1010"
console.log(num2.toString(2)); // "11111111"
console.log(num2.toString(16)); // "ff" (15*16) + 15


// toFixed(): 소수점 이하 자릿수를 지정하여 문자열로 반환

let userRate= 30.1234;

console.log(userRate.toFixed(2)); // "30.12"
console.log(userRate.toFixed(0)); // "30"
console.log(userRate.toFixed(6)); // "30.123400"
console.log(typeof(userRate.toFixed(2))); // "string"

// 문자열로 반환하기 때문에 Number()를 사용하여 숫자로 변환 후 사용 가능
console.log(Number(userRate.toFixed(2))); // 30.12


// isNaN(): NaN인지 판단해주는 함수 ( NaN : Not a Number, 숫자가 아님을 나타내는 특수한 값 )

let x = Number('x'); // 'x'는 숫자가 아니므로 NaN

console.log(isNaN(x)); // true
console.log(isNaN(3)); // false


// parseInt(): 문자열을 정수로 변환

let margin = '10px';

console.log(parseInt(margin)); // 10
console.log(Number('10px')); // NaN, 숫자가 아닌 문자가 포함되어 있으므로 NaN


let redColor = 'f3';

console.log(parseInt(redColor)); // 숫자로 시작하지 않으면 NaN
console.log(parseInt(redColor, 16)); // 243, 16진수로 변환하여 숫자 반환 (15*16) + 3 = 243
console.log(parseInt('11', 2)); // 3, 2진수로 변환하여 숫자 반환 (1*2) + (1*1) = 3


// parseFloat(): 문자열을 실수로 변환

let padding = '18.5px';

console.log(parseInt(padding)); // 18
console.log(parseFloat(padding)); // 18.5, 소수점 이하도 포함하여 변환