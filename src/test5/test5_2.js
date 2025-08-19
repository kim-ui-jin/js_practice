let num1 = 5.1;
let num2 = 5.7;

// Math.ceil(): 올림

console.log(Math.ceil(num1)); // 6
console.log(Math.ceil(num2)); // 6


// Math.floor(): 내림

console.log(Math.floor(num1)); // 5
console.log(Math.floor(num2)); // 5


// Math.round(): 반올림

console.log(Math.round(num1)); // 5
console.log(Math.round(num2)); // 6


// Math.random(): 0 이상 1 미만의 난수 반환

console.log(Math.random()); // 예: 0.123456789
console.log(Math.floor(Math.random() * 100)) + 1; // 1 이상 100 미만의 난수 반환


// Math.max(): 주어진 숫자 중 최대값 반환

console.log(Math.max(1, 2, 3, 4, 5)); // 5


// Math.min(): 주어진 숫자 중 최소값 반환

console.log(Math.min(1, 2, 3, 4, 5)); // 1


// Math.abs(): 절대값 반환

console.log(Math.abs(-10)); // 10
console.log(Math.abs(10)); // 10


// Math.pow(): 거듭제곱 계산

console.log(Math.pow(2, 3)); // 8, 2의 3제곱


// Math.sqrt(): 제곱근 계산

console.log(Math.sqrt(16)); // 4, 16의 제곱근