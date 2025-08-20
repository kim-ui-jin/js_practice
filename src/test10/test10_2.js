/*
* 나머지 매개변수
* user 객체를 만들어 주는 생성자 함수를 만들겁니다.
*/

function User(name, age, ...skills) { // 나머지 매개변수는 항상 마지막에 위치할 것
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "JS", "React");
const user3 = new User("Jane", 10, "English");

console.log(user1);
console.log(user2);
console.log(user3);