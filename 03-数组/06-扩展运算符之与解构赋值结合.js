//给多个对象同时赋值
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first)  //1
console.log(rest)   //[2,3,4,5]

const [first, ...rest] = [];
console.log(first)  //undefined
console.log(rest)   //[]

const [first, ...rest] = ["foo"];
console.log(first)  //"foo"
console.log(rest)   //[]

//注意点,只能放在参数的最后一位,否则会报错,为什么?因为rest参数会遍之后的所有参数.
const [...rest, first] = [1, 2, 3, 4, 5];
const [first, ...rest, last] = [1, 2, 3, 4, 5];