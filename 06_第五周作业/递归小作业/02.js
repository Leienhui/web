// 2.	【面试题】请检查某字符串中是不是只有a、b、c三个字母，要求不能使用循环语句（while不能用、for不能用、do while也不能用），只有使用递归实现本题。比如字符串“aaccbbb”符合条件，字符串“ab”符合条件，字符串“auuu”不符合条件。
var str = 'aaabbbcc';
function isABC(str) {
    if (str == 'a' || str == 'b' || str == 'c') return true;
    return false;
}
function checkStr(str, idx) {
    if (idx == str.length) return true;
    if (isABC(str[idx])) {
        return checkStr(str, ++idx);
    } else {
        return false;
    }
}
var a = checkStr(str, 0);
console.log(a);


