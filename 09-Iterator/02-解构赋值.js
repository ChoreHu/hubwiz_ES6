let a = {toString : s} = 123;
s === Number.prototype.toString // true
console.log(a.toString);
console.log(a.toString === Number.prototype.toString);
console.log(s);
// let {toString: s} = true;
// s === Boolean.prototype.toString // true