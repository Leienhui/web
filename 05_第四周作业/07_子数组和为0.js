// 请问数组[1, 3, 6, -2, -7, 4]中是否有任何子数组和是0？目测可以看出[3, 6, -2, -7]和就是0。再比如数组[3, 4, 8, -1, -3, -6, 3, -5, 7]中的子数组[4, 8, -1, -3, -6, 3, -5]的和是0。再比如数组[4, 5, 0]中的子数组[0]的和就是0。
var arr = [3, 4, 8, -1, -3, -6, 3, -5, 7];
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j <= arr.length; j++) {
        var newArr = arr.slice(i, j);
        var newArrSum = 0;
        for (var m = 0; m < newArr.length; m++) {
            newArrSum += newArr[m];
        }
        if (newArrSum == 0) {
            console.log(newArr);
            break;
        }
    }
}