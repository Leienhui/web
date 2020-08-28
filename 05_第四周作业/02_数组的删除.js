// 2.	请删除数组中所有能被3整除的数字
// [18, 18, 21, 6, 8, 13, 2]
var arr = [18, 18, 21, 6, 8, 13, 2];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);
