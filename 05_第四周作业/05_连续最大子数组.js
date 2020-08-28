var arr = [1, 6, 7, 9, 5, 7];
var maxArr = [0, 0, 0];
for (var i = 0; i < arr.length - 3; i++) {
    var newArr = arr.slice(i, i + 3);
    var sum1 = 0;
    var maxSum = 0;
    for (var k = 0; k < 3; k++) {
        sum1 += newArr[k];
        maxSum += maxArr[k]
    }
    if (sum1 > maxSum) {
        maxArr = newArr
    }
}
console.log(maxArr);    //[6,7,9]
console.log(maxSum);    //22
