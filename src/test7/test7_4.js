// Array.isArray() 배열인지 아닌지 확인하는 메서드

let user = {
    name: "Mike",
    age: 30
};

let userList = ["Mike", "Tom", "Jane"];

console.log(typeof user); // object
console.log(typeof userList); // object

console.log(Array.isArray(user)); // false
console.log(Array.isArray(userList)); // true