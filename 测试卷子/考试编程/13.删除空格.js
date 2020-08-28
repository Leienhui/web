var str = '     av   b   cd     ';
var arr = str.split('');
for (var i = 0; i < arr.length; i++) {
    if (arr[i] != ' ') {
        arr.splice(0, i + 1);
        break;
    }
}
for (var j = arr.length; j >= 0; j--) {
    if (arr[i] != ' ') {
        arr.splice(j);
        break;
    }
}
str = arr.join('');
console.log(str);