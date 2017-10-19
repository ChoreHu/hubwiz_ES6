Array() // []
Array(3) // [, , ,] 本意是想构建一个长度1,只有一个参数3的对象
Array(3, 11, 8) // [3, 11, 8]

Array.of() // []
Array.of(undefined) // [undefined]
Array.of(1) // [1]
Array.of(1, 2) // [1, 2]