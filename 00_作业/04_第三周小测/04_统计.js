// 4.	（面试题）统计100~200之间（含100、200）不能被3整除的数字多？还是“能被5整除或能被6整除”的数字多？
var num = 100;
var length3 = 0;
var length56 = 0;
while (num <= 200) {
    num % 3 != 0 && length3++;
    (num % 5 == 0 || num % 6 == 0) && length56++&&console.log(num);
    num++;

}
if (length3 > length56) {
    console.log("不能被3整除的数字多,有" + length3);
} else {
    console.log("能被5或者6整除的数字多,有" + length56);
}
