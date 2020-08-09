var resStr = '';
for (var i = 0; i <= 5; i++) {
    // 输出空格
    for (var space = 0; space < 6 - i; space++) {
        resStr += ' ' + "   "
    }

    // 输出数字
    for (var leftNum = 0; leftNum <= i; leftNum++) {
        resStr += Math.pow(2, leftNum) + "   ";

    }
    // 输出数字
    for (var rightNum = i - 1; rightNum >= 0; rightNum--) {
        resStr += Math.pow(2, rightNum) + "   ";

    }
    resStr += '\n'
}
console.log(resStr)