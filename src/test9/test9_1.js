// 배열 구조 분해

let [x, y] = [1, 2];

console.log(x); // 1
console.log(y); // 2

//////////////////////////////////////////////////

let users = ["Mike", "Tom", "Jane"];
let [user1, user2, user3] = users;

console.log(user1); // Mike
console.log(user2); // Tom
console.log(user3); // Jane

//////////////////////////////////////////////////

let str = "Mike-Tom-Jane";

let [user4, user5, user6] = str.split('-');

console.log(user4); // Mike
console.log(user5); // Tom
console.log(user6); // Jane

//////////////////////////////////////////////////

// let [a, b, c] = [1, 2];

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // undefined

let [a = 3, b = 4, c = 5] = [1, 2];

console.log(a); // 1
console.log(b); // 2
console.log(c); // 5

//////////////////////////////////////////////////

let [user7, , user8] = ["Mike", "Tom", "Jane", "Tony"];

console.log(user7); // Mike
console.log(user8); // Jane

//////////////////////////////////////////////////

let d = 1;
let e = 2;

[d, e] = [e, d];

console.log(d); // 2
console.log(e); // 1


