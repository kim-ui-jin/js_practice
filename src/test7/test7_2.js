// find

let arr = [1, 2, 3, 4, 5];

const result = arr.find((item) => {
    return item % 2 === 0;
})

console.log(result); // 2


let userList = [
    { name: "Mike", age: 30 },
    { name: "Jane", age: 27 },
    { name: "Tom", age: 10 }
];

const result2 = userList.find((user) => {
    if (user.age < 19) {
        return true;
    }
    return false;
});

console.log(result2); // { name: "Tom", age: 10 }


// findeIndex

const result3 = userList.findIndex((user) => {
    if (user.age < 19) {
        return true;
    }
    return false;
});

console.log(result3); // 2


// filter

let arr2 = [1, 2, 3, 4, 5, 6];

const result4 = arr.filter((item) => {
    return item % 2 === 0;
})

console.log(result4); // [2, 4, 6]


// map

let userList2 = [
    { name: "Mike", age: 30 },
    { name: "Jane", age: 27 },
    { name: "Tom", age: 10 }
];

let newUserList = userList2.map((user, index) => {
    return Object.assign({}, user, {
        id: index + 1,
        isAdult: user.age >= 19
    });
});

console.log(newUserList);
/*
 { name: 'Mike', age: 30, id: 1, isAdult: true },
 { name: 'Jane', age: 27, id: 2, isAdult: true },
 { name: 'Tom', age: 10, id: 3, isAdult: false }
*/
