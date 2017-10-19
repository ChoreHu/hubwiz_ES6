let arr = Array.from([1, 2, 3], x => x + x);
console.log(arr)    //2, 4, 6

let temp = 1;
let arr2 = Array.from([1, 2, 3], function(x){
    return x + this
},temp)
//第三个参数代表了指向
console.log(arr2);

//下面的例子将数组中布尔值为false的成员转为0。
Array.from([1, , 2, , 3], (n) => n || 0)
// [1, 0, 2, 0, 3]