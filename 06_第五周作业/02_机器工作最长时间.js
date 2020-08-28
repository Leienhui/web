// 下面的二维数组表示三台机器的开、停时间。
// [[300, 1000], [700, 1200], [1500, 2100]]
// 说白了就是第一台机器在300秒那时开启啦，1000秒的时候关闭啦。
// 第二台机器在700秒那时开启啦，1200秒的时候关闭啦。
// 第三台机器在1500秒那时开启啦，2100秒的时候关闭啦。
// 请你计算：最长至少有一台机器工作的时间段。答案是300~1200。
var arr = [[300, 1000], [700, 1200], [1200, 2100],[100,20000]];
var min = arr[0][0];
var max = arr[0][1];
var time = 0;
var maxtime = 0;
for (var i = 0; i < arr.length - 1; i++) {
    if (min > arr[i + 1][0]) {
        min = arr[i + 1][0];
    }
    if (max >= arr[i + 1][0] && max > arr[i + 1][1]) {
        max = max;
    } else if (max >= arr[i + 1][0] && max < arr[i + 1][1]) {
        max = arr[i + 1][1];
    }
    time = max - min;
    if (time > maxtime) {
        maxtime = time;
    }
}
console.log(min + "  " + max + "  " + maxtime);
