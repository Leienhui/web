function checkChoumi(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i] - arr[i+1]) > 10) {
            return false;
        }
    }
    return true;
}
var arr = [20, 4, 11, 20, 30, 24];
var s = checkChoumi(arr);
console.log(s);
