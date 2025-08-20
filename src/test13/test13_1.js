const mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
};

function showThisName() {
    console.log(this.name);
}

// showThisName();
// showThisName.call(mike);
// showThisName.call(tom);

function update(birthday, occupation) {
    this.birthday = birthday;
    this.occupation = occupation;
};

// update.call(mike, 1999, "singer");
// console.log(mike);

// update.call(tom, 2002, "teacher");
// console.log(tom);

update.apply(mike, [1999, "singer"]);
console.log(mike);

update.apply(tom, [2002, "teacher"]);
console.log(tom);