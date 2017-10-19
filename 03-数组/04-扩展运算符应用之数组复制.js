var a1 = [1, 2];
var a2 = a1;

a1[0] = 2;
console.log(a2[0]); //2 因为浅复制仅是复制了指针的指向

//那么ES5怎么实现数组的深复制呢?
var a3 = [1, 2];
var a4 = a3.concat();
//可行是可行,但是未免有些太曲解concat的本意了

//ES6 数组复制&...spread&...rest
const c1 = [1, 2];
//连续参数形式 参考 call函数
//数组参数形式 参考 apply函数(这意味着其实apply方法和call方法可以随时转变)(也可理解为,以后任何情况都只需要使用call方法)
//...spread,即将所有的参数都以连续参数的形式传递给c2
const c2 = [...c1];
//...rest,即接受不定个参数,以连续参数的形式收集在c3中
const [...c3] = c1;
console.log(c2);
console.log(c3);