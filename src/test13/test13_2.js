const nums = [3, 10, 1, 6, 4];
// const minNum = Math.min(...nums);
// const maxNum = Math.max(...nums);

const minNum = Math.min.apply(null, nums); // 1
// = Math.min.apply(null, [3, 10, 1, 6, 4])

const maxNum = Math.max.call(null, ...nums); // 10
// = Math.min.call(null, 3, 10, 1, 6, 4)

console.log(minNum);
console.log(maxNum);