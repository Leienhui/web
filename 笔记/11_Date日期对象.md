# Date()

* 使用`new Date()`即可得到当前事件的日期对象，他是object类型值
* 使用`new Date(年，月，日)`即可指定日期的日期对象
  * 注意：月份是从0开始算，其他都是从1开始
  * 如``new Date(2020,11,1)`表示2020年12月1日
    * 也可以``new Date('2020-12-01')`这样表示

* ```javascript
        // 不加参数，就是当前时间
        var t1 = new Date();
        console.log(t1);
        console.log(typeof t1);
        // 设置6月1日
        var t2 = new Date(2020, 5, 1); //不算时区,Mon Jun 01 2020 00:00:00 GMT+0800
        var t3 = new Date("2020-06-01"); //算时区,Mon Jun 01 2020 08:00:00 GMT+0800 (中国标准时间)
        console.log(t2); //Mon Jun 01 2020 00:00:00 GMT+0800
        console.log(t3); //Mon Jun 01 2020 08:00:00 GMT+0800 (中国标准时间)
  ```

 ## 获取时间的某一部分

```javascript
      // 不加参数，就是当前时间
      var t = new Date();
      console.log("日期", t.getDate());
      console.log("星期", t.getDay());
      console.log("年份", t.getFullYear());
      //   月份要加1才是正确的
      console.log("月份", t.getMonth() + 1);
      console.log("小时", t.getHours());
      console.log("分钟", t.getMinutes());
      console.log("秒数", t.getSeconds());
```



## 时间戳

* 时间戳表示**1970年1月1日0点距离某一时刻的毫秒数**

* 通过`getTime()`方法或者`Date.parse()`函数可以将日期对象变为时间戳

* 通过`new Date(时间戳)`的写法。可以将时间戳变为日期对象

  ```javascript
  	  // 不加参数，就是当前时间
        var t = new Date();
        //   显示时间戳的两种方法
        var timestamp1 = t.getTime(); //精确到毫秒
        var timestamp2 = Date.parse(t); //精确到秒
  
        //   时间戳变成日期对象
        var tt = new Date(timestamp1);
        console.log(tt);
  
        //   输出时间戳
        console.log(timestamp1);
        console.log(timestamp2);
  ```

  