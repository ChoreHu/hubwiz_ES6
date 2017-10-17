'use strict'
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
console.log(factorial(5));
console.log(factorial2(5));
console.log(Fibonacci(5))
console.log(Fibonacci2(5))