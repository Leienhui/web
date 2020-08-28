var arr = [4, 8, 9, 5];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
var average = sum / arr.length;
function square(num) {
    return Math.pow((num - average), 2);
}
var all = 0;
for (var j = 0; j < arr.length; j++) {
    all += square(arr[j]) / (arr.length - 1);
}
var result = Math.sqrt(all);
console.log(result);
