# Math

```javascript
      var a = Math.max(1, 2, 56, 6, 8, 9, 12, 4, 3);
      var b = Math.min(1, 2, 56, 6, 8, 9, 12, 4, 3);
      console.log(a); //56
      console.log(b); //1
```

* `Math.max()`要求参数必须**罗列出来**

* ## 利用Math.max()求数组最大值

* `apply()`方法

  * 指定函数的上下文，并以**数组**的形式传入**零散值**当作函数的参数

```javascript
      var a = Math.max(1, 2, 56, 6, 8, 9, 12, 4, 3);
      var b = Math.min(1, 2, 56, 6, 8, 9, 12, 4, 3);
      var arr = [2, 300, 6, 5, 12, 43, 56, 87, 90];
      //   以数组的形式传入零散值当作函数的参数
      var max = Math.max.apply(window, arr);
      var min = Math.min.apply(window, arr);
      console.log(max);//300
      console.log(min);//2
      console.log(a); //56
      console.log(b); //1
```

