# BOM

* 浏览器对象模型，B就是browser
* BOM就是关于浏览器的

## 页面滚动事件与卷动值

### 原生-scrollTop

```javascript
window.onscroll = function () {
   console.log(document.documentElement.scrollTop);
}
```

* `document.documentElement`表示页面的**根元素**，就是document对象
* `scrollTop`后面没有圆括号

### jQuery-scrollTop()

```javascript
// 监听窗口卷动事件
$(window).scroll(function(){
   // 输出窗口向上卷动的数值
  console.log($(window).scrollTop());
})
```

## 净位置

### jQuery得到净位置-offset()

* 页面刚好卷动到某一值就出现，这个位置就是该元素的净位置
  * 也就是这个标签到页面顶部的距离
* `$('#p').offset().top`
  * 得到id为p的元素的净位置

### 原生得到净位置

* 原生中`offsetTop`得到的是与自己定位父亲的top值

  * `offsetTop`就是到定位父亲的净高度

  * 因此想要获取所有的净位置，相当于使用递归

* ```javascript
          window.onload = function () {
              var h3 = document.getElementById('h3');
              var sum = 0;
              o = h3;
              while (true) {
  
                  // 得到这个元素到定位父亲的净位置
                  sum += o.offsetTop;
                  // offsetParent就是距离该子元素最近的进行过定位的父元素
                  o = o.offsetParent;
                  // 如果o是null或者o的节点类型不是元素节点
                  if (!o||o.nodeType != 1) {
                      console.log(sum);
                      break;
                  }
              }
          }
  ```

* 在计算净位置的时候，必须是加载完所有的东西才计算

  * `window.onload `必须要写

