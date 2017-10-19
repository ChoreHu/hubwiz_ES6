//spread扩展符的形式对数组及函数非常有用.
//例如最简单的数字求和
function push(array, ...items) {
    array.push(...items);
}

function sum(result = 0,...x) {
    for (let val of x) {
        result += +val;
    }
    return result;
}

//扩展符可以和正常函数参数结合使用,非常灵活
function f(v, w, x, y, z) { }
const args = [0, 1];
f(-1, ...args, 2, ...[3]);

const numbers = [4, 38, 11, 22];
let r = add(0, ...numbers) // 75
console.log(r)
