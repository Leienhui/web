// 编写一个JS程序，求回文平方数。回文平方数的意思：又是回文的，又是完全平方数，就是开根号能够除尽的那种，比如121，是完全平方数，因为开根号等于，并且也是回文的；再比如10201也是符合条件，它是101的平方，它自己也是回文的。要求每行10个，输出前50个。
function huiwen(m) {
    m = String(m);
    var mLength = m.length - 1;
    for (var i = 0; i <= mLength - i; i++) {
        if (m[i] != m[mLength - i]) {
            return false;
        }
    }
    return true;
}
var count = 0;
var a = 10;
var str = '';
while (count <= 50) {
    a++;
    var num = Math.pow(a, 2);
    if (huiwen(num)) {
        count++
        str += String(num).padEnd(12, ' ') + '\t';
        if (count % 10 == 0) {
            console.log(str);
            str = '';
        }

    }

}
