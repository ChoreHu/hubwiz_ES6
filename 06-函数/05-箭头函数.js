function doSomeThing(){
    console.log("inner")
}
let fn = () => doSomeThing()
fn()