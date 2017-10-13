function* helloWorldGenerator(){
    yield 'hello';
    console.log("调用第二次next方法时");
    yield 'world';
    console.log("调用第三次next方法时");
    return 'ending';
}
var hw = helloWorldGenerator();

console.log(hw.next())
console.log(hw.next())
console.log(hw.next())

// 请在这里亲自体验下，左侧讲解的知识点。
function* hello(){
    yield "hello"
    yield "汇智网"
    return
}
var h = hello();
console.log(h.next().value);
console.log(h.next().value);