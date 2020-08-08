var obj={
    "中国":123,
    "美国":456,
    "法国":12,
    "德国":3,
    "英国":1234,
    "韩国":10
};
// 将对象转换为数组
var arr=[];
for(var k in obj){
    // 数组里面插入一个对象的写法
    arr.push({"country":k,"number":obj[k]});
}
// 将数组进行排序
arr.sort(function(a,b){
    return a.number-b.number;
})
console.log(arr);

