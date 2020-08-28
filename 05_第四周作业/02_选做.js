// 2.	[选做题] 请生成数组[1, 1, 2, 3, 5, 8, 13, 21, 34……]，不需使用递归技术，就是利用数组和for循环，生成斐波那契数列数组，要求生成20项。
var arr = [1, 1];
for (var i = 2; i < 20; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    arr.push[arr[i]];
}
console.log(arr);