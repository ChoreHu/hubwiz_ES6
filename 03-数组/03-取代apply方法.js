// ES5 的写法
var result = Math.max.apply(null, [14, 3, 77])
console.log(result);
// ES6 的写法
var maz = Math.max(...[14,3,77]);
console.log(maz);

//第二个例子
var arr1 = [0,1,2];
var arr2 = [3,4,5];
//以arr1为this,借用array原型上的push方法,将arr2中的数组参数都转换成连续函数进行操作
Array.prototype.push.apply(arr1,arr2);
console.log(arr1);

//ES6 方法
arr1.push(...arr2);
console.log(arr1);