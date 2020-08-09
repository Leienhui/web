// 使用循环语句计算下面算式的值：
// 1 + 1+√2+1+ √2+√3+1+√2+√3+√4+1+√2+√3+√4+√5
var sum=0;
var result=0;
for(var i=1;i<=5;i++){
    sum+=Math.sqrt(i);
    result+=sum;
}
console.log(result);