# call与apply

##  

`函数.call(上下文);`

`函数.apply(上下文);`

```javascript
function sum() {
        console.log(this.a + this.b + this.c);
      }
      var obj = {
        a: 100,
        b: 20,
        c: 187,
        // sum: sum,
      };
      // 注意，sum并不是obj的属性，所以这样不能调用，除非把sum设为obj的属性才可以sum:sum
      obj.sum();
      sum.call(obj); //307
      sum.apply(obj); //307
```

## call与apply的区别

* ```javascript
        function sum(c, d, e) {
          console.log(this.a + this.b + this.c + c + d + e);
        }
        var obj = {
          a: 100,
          b: 20,
          c: 187,
        };
    	//	传递参数的时候的区别
        sum.call(obj, 4, 5, 6);
        sum.apply(obj, [4, 5, 6]);
  ```

* 在**函数需要传递参数的时候**

  * **call要用逗号罗列参数**
  * **apply要把参数写到数组中**

## call、apply使用谁好？

* 看情况使用

  ```javascript
        function fun1() {
          //fun1被调用， 这里的this指的是fun1的this也就是window对象,arguments是一个类数组对象，接收fun1的实参，所以这里要用apply而不是用call
          fun2.apply(this, arguments);
        }
        function fun2(c, d, e) {
          console.log(c + d + e);
        }
        fun1(33, 44, 55);
  ```

  

