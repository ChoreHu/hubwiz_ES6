function sayHello(name){
    //传统的指定默认参数的方式
    console.log('Hello '+name);
}
 
//运用ES6的默认参数
function sayHello2(name='hubwiz'){
    console.log(`Hello ${name}`);
}
sayHello();  //输出：Hello hubwiz
sayHello('汇智网');  //输出：Hello 汇智网
sayHello2();  //输出：Hello hubwiz
sayHello2('汇智网');  //输出：Hello 汇智网