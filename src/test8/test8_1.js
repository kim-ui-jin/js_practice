/*
arr.sort()
배열 재정렬
주의! 배열 자체가 변경됨
인수로 정렬 로직을 담은 함수를 받음
*/

let arr = [1, 5, 4, 2, 3];
arr.sort();
console.log(arr); // [1, 2, 3, 4, 5]

let arr2 = ['a', 'c', 'd', 'e', 'b'];
arr2.sort();
console.log(arr2); // [ 'a', 'b', 'c', 'd', 'e' ]

let arr3 = [27, 8, 5, 13];
arr3.sort();
console.log(arr3); // [ 13, 27, 5, 8 ] -> 정렬할때 요소를 문자열로 취급 그래서 1과 2가 포함된 13, 27이 앞으로 오게됨

let arr4 = [27, 8, 5, 13];

// 8, 27, 5, 13
// 5, 8, 27, 13
// 5, 8, 13, 27

arr4.sort((a, b) => {
    console.log(a, b); // 정렬 로직을 확인할 수 있음
    return a - b; // 오름차순
});
console.log(arr4);