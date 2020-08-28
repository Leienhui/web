// var num = 12345678;
// var str = '';
// while (num > 1000) {
//     var value = num % 1000;
//     str = ',' + value + str;
//     num = parseInt(num / 1000);
//     if (num < 1000) {
//         str = num + str;
//     }
// }
// console.log(str);
function qfw(num, str) {
    if (num < 1000) return num + str;
        str = ',' + num % 1000 + str;
        return(qfw(parseInt(num/1000),str));
}
var s=qfw(1398765467887,'');
console.log(s);
