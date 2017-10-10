var items = new Set([1,2,3,4,5,5,5,5]);
console.log(items); // 5

let set = new Set();
set.add({})
set.size // 1
set.add({})
set.size // 2
console.log(set);

let set2 = new Set(['张三','李四','王五']);
//1
for(let item of set2.keys()){
    console.log(item);
}
//2
for(let item of set2.values()){
    console.log(item);
}
//3
for(let item of set2.values()){
    console.log(item);
}
//4
Array.from(set2).map(v => console.log(v));
