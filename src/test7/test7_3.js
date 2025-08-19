// join

let arr = ["안녕", "나는", "철수야"];

let result = arr.join();
let result2 = arr.join("  ");
let result3 = arr.join("-");

console.log(result); // 안녕, 나는, 철수야
console.log(result2); // 안녕  나는  철수야
console.log(result3); // 안녕-나는-철수야


// split

const users = "Mike,Jane,Tom,Tony";

const result4 = users.split(",");

console.log(result4); // [ 'Mike', 'Jane', 'Tom', 'Tony' ]

let str = "Hello, My name is Mike.";

const result5 = str.split("");

console.log(result5); // [ 'H', 'e', 'l', 'l', 'o', ',', ' ', 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'M', 'i', 'k', 'e', '.' ]

