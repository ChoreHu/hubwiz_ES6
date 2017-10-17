function show(name = "小明", place = "北京") {
    var name = "tom";
    return `您好,${name}!欢迎来到${place}`
}
console.log(show());
console.log(show("小红", "深圳"))

function foo({ x, y = 5 }) {
    console.log(x, y);
}

foo({}) // undefined 5
foo({ x: 1 }) // 1 5
foo({ x: "x", y: "y" }) // 1 2
// foo() // TypeError: Cannot read property 'x' of undefined