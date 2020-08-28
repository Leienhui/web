// 把用短横分隔的字符串转换成驼峰式写法，请用js实现。比如字符串“abc-def-ghi”变为“abcDefGhi”
var str = "abc-def-ghi";
var newStr = '';
for (var i = 0; i < str.length; i++) {
    if (str[i] == '-') {
        i++;
        newStr += str[i].toUpperCase();
    }
    else {
        newStr += str[i];
    }
}
console.log(newStr);