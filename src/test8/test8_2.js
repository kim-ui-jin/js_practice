/*
arr.reduce()
인수를 함수로 받음
( 누적 계산값, 현재값 ) => { return 계산값 };
*/

// 배열의 모든수 합치기

let arr = [1, 2, 3, 4, 5];

// for, for of, forEach 등으로 합치기

let result = 0;
arr.forEach(num => {
    result += num; // result = result + num;
});

console.log(result); // 15

const result2 = arr.reduce((prev, cur) => {
    return prev + cur; // prev = 누적값, cur = 현재값
}, 0);  // 초기값 0을 설정

console.log(result2); // 15

////////////////////////////////////////////////

let userList = [
    { name: "Mike", age: 30 },
    { name: "Tom", age: 10 },
    { name: "Jane", age: 27 },
    { name: "Sue", age: 26 },
    { name: "Harry", age: 42 },
    { name: "Steve", age: 60 }
];

let result3 = userList.reduce((prev, cur) => {
    if (cur.age > 19) {
        prev.push(cur.name);
    }
    return prev;
}, []);

console.log(result3); // [ 'Mike', 'Jane', 'Sue', 'Harry', 'Steve' ]

let result4 = userList.reduce((prev, cur) => {
    return prev + cur.age;
}, 0);

console.log(result4); // 195

let result5 = userList.reduce((prev, cur) => {
    if (cur.name.length === 3) {
        prev.push(cur.name);
    };
    return prev;
}, []);

console.log(result5); // [ 'Tom', 'Sue' ]

// arr.reduceRight(): reduce와 동일하게 동작하지만, 배열의 마지막 요소부터 시작하여 누적 계산을 진행합니다.