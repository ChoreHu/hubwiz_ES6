function change(){
    return 1;
}
var str = 'abba';
var ss = str.replace('a',change());
console.log(ss);