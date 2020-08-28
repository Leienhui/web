var str = 'www.qq.com?aaaaa=5&bbbbbccc=7&cvvvv=6';
var arr = str.split('?');
var newStr = String(arr[1]);
var newArr = newStr.split('&');
console.log('网站网址为' + arr[0]);
var valueArr = [];
for (var i = 0; i < newArr.length; i++) {
    var s = String(newArr[i]).split('=');
    valueArr.push(s);
    console.log("参数为" + valueArr[i][0] + "值为" + valueArr[i][1]);
}

