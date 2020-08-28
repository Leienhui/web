// 请根据指定数组生成一个新的数组，新数组的每项是他自己以及之前所有项的和。比如指定数组为[1,2,3,4,5]那么新数组就是[1,3,6,10,15]。再比如指定数组为[2,3,1,3,3]，新数组就是[2,5,6,9,12]。
var arr = [1, 2, 3, 4, 5];
var newArr = [arr[0]];
for (var i = 1; i < arr.length; i++) {
    newArr.push(newArr[i - 1] + arr[i]);
}
console.log(newArr);