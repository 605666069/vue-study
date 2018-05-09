//箭头函数不具备this arguments
// function a(b) {
//     return b+1;
// }

//let a = b => b + 1;//去掉function关键字，参数如果有一个可以省略小括号
function a(b) {
    return function (c) {
        return b + c;
    }
}
console.log(a(1)(2));


let b = c => d => c + d;
console.log(b(1)(2));

