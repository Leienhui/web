// 请问最小的两个相邻的质数，并且它们相差大于100的，是几和几？
var minus1 = 2;
var minus2 = 2;
while (true) {
    var length = 0;
    minus2++;
    for (var i = 1; i <= minus2; i++) {
        if (minus2 % i == 0) {
            length++;
        }
    }
    if (length > 2) {
        minus2++;
    }
    else if (length == 2 && (minus2 - minus1) >= 100) {
        console.log(minus1 + '    ' + minus2);     //370261    370373
        break;
    } else if (length == 2 && (minus2 - minus1) < 100) {
        minus1 = minus2;
        minus2++;
    }
}