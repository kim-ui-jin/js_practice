// const mike = {
//     name: "Mike",
// };

// function update(birthday, occupation) {
//     this.birthday = birthday;
//     this.occupation = occupation;
// };

// const updateMike = update.bind(mike);

// updateMike(1980, "police");
// console.log(mike);

const user = {
    name: "Mike",
    showName: function () {
        console.log(`hello, ${this.name}`);
    },
};

// user.showName(); // hello, Mike

let fn = user.showName;

fn.call(user); // hello, Mike
fn.apply(user); // hello, Mike

let boundFn = fn.bind(user);
boundFn(); // hello, Mike

