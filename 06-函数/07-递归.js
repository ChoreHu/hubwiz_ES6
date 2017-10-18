function Fibonacci2(n, ac1 = 1, ac2 = 1) {
    if (n <= 1) { return ac2 };
    return Fibonacci2(n - 1, ac2, ac1 + ac2);
}
function Fibonacci(n) {
    if (n <= 1) { return 1 };
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
function factorial(n) {
    if(n == 1) { return 1 };
    return n * factorial(n - 1);
}
function factorial2(n, total = 1){
    if(n == 1) {return total};
    return factorial2(n - 1, total = n * total);
}
/* 
递归的概念就是递归 什么是递归?自己调用自己即是递归 
例 阶乘  fn(5) = 5 * fn(4)
        fn(4) = 4 * fn(3)
        fn(3) = 3 * fn(2)
        fn(2) = 2 * fn(1)
        fn(1) = 1
        那么可以理解为fn(5)如果不递归到最后一层是不可能得到答案的
        内存中存储的数据为 5 4 3 2 fn(1)
尾递归的概念本质上是循环 
        fn(5) = 120 * fn(1)
        fn(4) = 24 * fn(1)
        fn(3) = 6 * fn(1)
        fn(2) = 2 * fn(1)
        fn(1) = 1
尾递归，比线性递归多一个参数，这个参数是上一次调用函数得到的结果；
所以，关键点在于，尾递归每次调用都在收集结果，避免了线性递归不收集结果只能依次展开消耗内存的坏处。
*/
console.log(factorial(5));
console.log(factorial2(5));
console.log(Fibonacci(5))
console.log(Fibonacci2(5))
console.time('factorial2');
console.log(Fibonacci2(10));
console.timeEnd('factorial2');
console.time('factorial');
console.log(Fibonacci(10));
console.timeEnd('factorial');
