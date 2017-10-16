let text1 = "abc";
let text2 = "一二𠮷";
for(let val in text1){
    console.log(text1[val])
}
for(let val in text2){
    console.log(text2[val])
}
for(let val of text1){
    console.log(val)
}
for(let val of text2){
    console.log(val)
}
