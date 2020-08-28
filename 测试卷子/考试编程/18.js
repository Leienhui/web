function gongyueshu(a, b) {
    var max = 0;
    var i = a > b ? b : a;
    for (var j = 1; j <= i; j++) {
        if (a % j == 0 && b % j == 0 && max <= j) {
            max = j;
        }
    }
    return max;
}
console.log(gongyueshu(30, 30));