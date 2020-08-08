function fun() {
    var a = 10;
    return {
        // 下面的写法与  getA :function () {}写法一样
        getA() {
            console.log(a);  //10
        },
        add() {
            // 变量被私有化了
            a++;
        }
    }
}
var obj = fun();
obj.add();
obj.getA();  // 11