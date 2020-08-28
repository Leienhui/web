var count = 0;
var i = 1000;
while (i < 10000) {
    var str = String(i);
    for (var j = 0; j < str.length; j++) {
        if (Number(str[j]) == 1) {
            count++;
        }
    }
    i++;
}
console.log(count)   //3700