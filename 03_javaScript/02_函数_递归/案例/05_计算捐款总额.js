const  fs =require('fs');
var arr1=fs.readFileSync('./05_捐款.txt', 'utf-8').split('\r\n');
var sum=0;
for(var i=0;i<arr1.length;i++){
   var arr2=arr1[i].split(':');
   sum+=Number(arr2[1]);

}
console.log(sum);
