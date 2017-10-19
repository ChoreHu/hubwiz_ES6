let arr1 = [1];
let arr2 = [2, 3];
let arr3 = [4, 5];

//ES5合并数组
let arr = arr1.concat(arr2, arr3);
//ES6合并数组
let array = [...arr1, ...arr2, ...arr3];
console.log(arr);
console.log(array);