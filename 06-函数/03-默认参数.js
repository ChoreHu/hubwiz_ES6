// 写法一
function m1({ x = 0, y = 0 } = {}) {
    return [x, y];
}

// 写法二
function m2({ x, y } = { x: 0, y: 0 }) {
    return [x, y];
}
//写法一 如果方法执行的时候不给x或者y,该值为undefined
//写法二 如果方法执行的时候不给x或者y,该值为0