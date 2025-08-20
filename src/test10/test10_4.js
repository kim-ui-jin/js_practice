let user = { name: "Mike" };
let info = { age: 30 };
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

// 전개 구문 사용 x

// user = Object.assign({},
//     user,
//     info,
//     {
//         skills: []
//     },
// );

// fe.forEach((item) => {
//     user.skills.push(item);
// });
// lang.forEach((item) => {
//     user.skills.push(item);
// });

// 전개 구문 사용 o

user = {
    ...user,
    ...info,
    skills: [...fe, ...lang],
};

console.log(user);
