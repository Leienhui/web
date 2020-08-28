// 用递归的方法，求数组的每项之和[4, 12, 14, 3, 8]，要求不能使用任何变量（即不能var东西，当然var arr = [4, 12, 14, 3, 8]是可以的），也不能使用循环语句。提示：可以借助函数的形参，进行存储。
var arr = [4, 12, 14, 3, 8];
function sum(arr, idx, result) {
    if (idx == arr.length) return result;
    if (idx < arr.length) {
        result += arr[idx];
        return sum(arr, ++idx, result);
    }
}
console.log(sum(arr, 0, 0));
