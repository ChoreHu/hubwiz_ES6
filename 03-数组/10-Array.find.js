//返回第一个小于0的数字
console.log([1, 4, -5, 10].find( x => x < 0));

//返回第一个大于9的数字
console.log([1, 5, 10, 15].find(function(elem, index, arr){
    return elem > 9;
}))

//indexOf无法分辨NaN
console.log([NaN].indexOf(NaN));

//不可用绝对等于,因为所有的NaN都不等于NaN
console.log([NaN].find( x => Object.is(NaN, x)));
