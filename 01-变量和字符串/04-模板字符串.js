//普通字符串
let t1 = `this is \nan ordinary text`
console.log(t1);
//多行字符串
let t2 = `this is a
mutiple text`
console.log(t2);
//占位符字符串
let t3 = hello("xiaomin", "beijing");
function hello(name, place){
    return `hello ${name}! welcome to ${place}`;
}
console.log(t3);
let t4 = `
        <table>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>    
        </table>
`
//计算
let obj = {a: 1, b: 2};
console.log(`${obj.a + obj.b}`);