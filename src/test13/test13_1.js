const mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
};

function showThisName() {
    console.log(this.name);
}

// showThisName(); // undefined
// showThisName.call(mike); // Mike
// showThisName.call(tom); // Tom

function update(birthday, occupation) {
    this.birthday = birthday;
    this.occupation = occupation;
};

// update.call(mike, 1999, "singer");
// console.log(mike); // name: 'Mike', birthday: 1999, occupation: 'singer'

// update.call(tom, 2002, "teacher");
// console.log(tom); // name: 'Tom', birthday: 2002, occupation: 'teacher'

update.apply(mike, [1999, "singer"]);
console.log(mike); // name: 'Mike', birthday: 1999, occupation: 'singer'

update.apply(tom, [2002, "teacher"]);
console.log(tom); // name: 'Tom', birthday: 2002, occupation: 'teacher'