var total = 30;
var msg = passthru`The total is ${total} (${total*1.05} with tax)`;
function passthru(literals){
    var result = "";
    var i = 0;

    while (i<literals.length){
        result += literals[i++]; //literals这个数组包括的是模板字符串中那些没有变量替换的部分，也就是The total is,(,with tax).
        if(i<arguments.length){
            result+=arguments[i]; //arguments这个数组包括的是全部的参数，因为执行到这里的时候，i已经加1，所以result连接的是模板字符串各个变量被替换后的值。也就是这里的30,31.5
        }
    }
    return result;
}
console.log(msg)

function SaferHTML(templateData){
    //等价于saferHTML(['<p>',' has sent you a message.</p>'],sender);
    var s = templateData[0];
    var i;
    for(i = 1;i<arguments.length;i++){
        var arg = String(arguments[i]);

        //sender里面可能有特殊字符，进行转义 进行过滤
        s += arg.replace(/&/g,"&amp;")
                .replace(/</g,"&lt;")
                .replace(/>/g,"&gt;");
        s += templateData[i];
    }
    console.log(i);//2，表示这个循环只执行了一次，因为templateData[0]="<p>",arguments这个数组只有${sender}这个元素，后面一长串字符都是templateData[2];
    return s;
}
var sender = '<script>alert("abc")</script>';
var message = SaferHTML`<p>${sender} has sent you a message.</p>`;
console.log(message);
//而单纯的模板字符串还存在着很多的局限性。如：
//不能自动转义特殊的字符串。（这样很容易引起注入攻击）
// 不能很好的和国际化库配合（即不会格式化特定语言的数字，日期，文字等）
// 没有内建循环语法，（
// 甚至连条件语句都不支持， 只可以使用模板套构的方法）