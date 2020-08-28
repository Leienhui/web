// 1.	【面试题】一个人赶着鸭子去每个村庄卖，每经过一个村子卖出当前赶的鸭子的一半加1只。这样，他经过7个村庄之后，还剩2只鸭子，请问他一开始有多少只鸭子。必须使用递归实现本题，不能使用任何循环语句（while不能用、for不能用、do while也不能用）。
function sellDuck(num, idx) {
    var sum = num;
    if (idx == 0) return sum;
    if (idx > 0) {
        return sellDuck((num + 1) * 2, --idx);
    }
}
var s = sellDuck(2, 7);
console.log(s);

