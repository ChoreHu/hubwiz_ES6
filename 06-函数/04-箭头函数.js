// 基本用法

// ES6允许使用“箭头”（=>）定义函数。
var f = v => v;
//等价于
var f2 = function(v) {
    return v;
}
f(1);
f2(2);

//如果箭头函数不需要参数或需要多个参数,就使用一个圆括号代表参数部分
var f3 = () => 5;
//等价于
var f4 = function(){
    return 5;
}
var sum = (num1, num2) => num1 + num2
var sum2 = function(num1, num2){
    //window.sum2() 所以this指向的是window
    //console.log(this);
    return num1 + num2;
}
//如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
var sum3 = (num1, num2) => {
    return num1 + num2;
}
console.log(sum(1,2));
console.log(sum2(1,2));
// 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
var getObject = id => ({id : id, name: "temp"});
console.log(getObject("hu"));
// 箭头函数可以与变量解构结合使用。
const full = ({ first, last }) => first + ' ' + last;
let person = {
    first : "hu",
    last : "piao"
}
console.log(full(person));

