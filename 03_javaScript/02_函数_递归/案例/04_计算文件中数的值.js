var fs=require('fs');
var arr=fs.readFileSync('./04_数据.txt').toString().split('\r\n');
var sum=0;
for(var i=0;i<arr.length;i++){
    sum+=Number(arr[i]);
}
console.log(sum);