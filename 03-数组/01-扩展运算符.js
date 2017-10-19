//扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
console.log(...[1,2,3]);
//这样就不会被认作是3个参数了,而是五个参数
console.log(1,...[2,3,4], 5);
// console.log(...document.querySelectorAll('div'))