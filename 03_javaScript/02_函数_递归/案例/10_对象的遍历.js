var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
};
for (var k in obj) {
    // console.log(`${k}的值是${obj[k]}`);
    console.log(k + '的值是' + obj[k]);
}