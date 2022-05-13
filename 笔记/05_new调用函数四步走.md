#  new操作符调用函数

* `new 函数()`
* js规定，使用new操作符调用函数会进行“四步走”

## 四步走

* 函数体内会自动创建出一个空白对象

* 函数的上下文（this）会指向这个对象（创建的空白对象）

* 函数体内的语句会执行

* 函数会**自动返回**上下文对象(this)，即使函数没有return语句

  ```javascript
        function fun1() {
          //{},现在这里创建一个空对象
          // 将带有this的都添加到这个空对象中
          //自动执行函数并返回结果
          this.a = 3;
          this.b = 5;
          console.log(this.a + this.b);
        }
        var obj = new fun1();
        console.log(obj);
  ```

  

  

