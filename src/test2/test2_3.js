const user = {
    name: "Mike",
    age: 30,
};

const user2 = Object.assign({}, user);
user2.name = "Tom";

console.log(user);
console.log(user2);

const result = Object.keys(user);
console.log(result);

const value = Object.values(user);
console.log(value);

const entries = Object.entries(user);
console.log(entries);