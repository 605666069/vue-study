let arr1 = [1,2,3].map(function (item) {
    return `<li>${item}<li/>`
});
console.log(arr1);

let arr2 = [1,2,3,4,55];
console.log(arr2.includes(5)); //返回bool类型
//返回找到的哪一项 不会改变数组 回掉函数中返回true 表示找到了 找到后停止循环
console.log(arr2.find(function (item,index) {
    return item.toString().indexOf(5)>-1
}));
[1,2,3,4].reduce(function (prev,next,index,item) {
  console.log(arguments);
});
