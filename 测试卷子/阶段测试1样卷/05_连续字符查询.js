// 查找字符串中是否有连续3项或3项以上重复字符，如果有，则返回这些字符的下标位置。
var str = '11111eeeeeefghjkklik999999nnnnnswfghjkkk';
var a = 0;
var b = 0;
var count = 0;
while (b < str.length) {
    b++;
    if (str[a] == str[b]) {
        if(b-a>=3){
            console.log(a,b);
        }
    } else {
        a = b;
    }
}