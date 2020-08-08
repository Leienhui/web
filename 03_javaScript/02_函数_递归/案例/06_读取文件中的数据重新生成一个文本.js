var fs = require('fs');
var data = fs.readFileSync('./06_数据信息.txt', 'utf-8');
var arr = data.split('\r\n\r\n');
for (var i = 0; i < arr.length; i++) {
    var valueArr = arr[i].split('\r\n');
    console.log(valueArr[0], valueArr[1])
    //    追加文件
    fs.appendFileSync('./06_自动生成的文件.txt', valueArr[0]+valueArr[2] + '\r\n');
}