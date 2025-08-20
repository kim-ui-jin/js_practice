// 객체 구조 분해

// let user = { name: "Mike", age: 30 };
// let { name, age } = user;
// let name = user.name;
// let age = user.age;

// console.log(name); // Mike
// console.log(age); // 30

//////////////////////////////////////////////////

// let user = { name: "Mike", age: 30 };

// let { age, name } = user;

// console.log(name); // Mike
// console.log(age); // 30

//////////////////////////////////////////////////

// let user = { name: "Mike", age: 30 };

// let { name: userName, age: userAge } = user;

// console.log(userName); // Mike
// console.log(userAge); // 30

//////////////////////////////////////////////////

// let user = { name: "Mike", age: 30 };

// let { name, age, gender } = user;

// console.log(name); // Mike
// console.log(age); // 30
// console.log(gender); // undefined

//////////////////////////////////////////////////

// let user = { name: "Mike", age: 30 };

// let { name, age, gender = "male" } = user;

// console.log(name); // Mike
// console.log(age); // 30
// console.log(gender); // male

//////////////////////////////////////////////////

let user = {
    name: "Jane",
    age: 18,
    gender: "female"
};

let { name, age, gender = "male" } = user;

console.log(name); // Jane
console.log(age); // 18
console.log(gender); // female

// user 객체에 gender 값이 있다면 그 값이 사용됨
// 객체로부터 받은 값이 undefined일 때만 기본값 사용