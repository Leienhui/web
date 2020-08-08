# jQuery基础

* jQuery库的引用：
  * 这个网站复制到代码中：`https://www.bootcdn.cn/`

## 元素的选择

### 通过标签名选择元素：$('选择器')

```javascript
// 通过标签名选择元素和选中元素
$('ul li').click(function(){
    //点击谁让谁的宽度变为400px
	$(this).animate({'width':400},200);
 });
```

* $('选择器')，批量选择，里面暗含for循环
* 添加监听变为上面的
* `$(this)`表示将点击的这个元素变为jquery对象
* animate();
  * 参数1：动画的终点
  * 参数2：动画的时长

## jQuery解决DOM问题

### 获取值

```javascript
$('input').val();
```

### 创建节点

```javascript
// 创建节点,并将节点追加到他的父亲上
$('<li>'+str+'<button>删除</button></li>').appendTo('ul');
```

### 清空文本框

```javascript
$('input').val('');
```

### 得到父节点

```java
$(this).parent();
```

### **is(':animated')**

* 判断是否还在动画运动
* 动画效果去文档的效果的方法里面找

### addClass('类名')

* 添加类名
* 这个是对css进行操作，去相应文档地方找

## removeClass('类名')

* 删除类名
* 这个是对css进行操作，去相应文档地方找

## 事件委托

```javascript
$('#list').delegate('button','click',function(){
      $(this).parent().remove();
  })
```



##  自杀可以不找爹了

```javascript
$(自己).remove();
$(this).remove();//这个this就是促发事件的那个元素
```

## 呼吸轮播

* 所有图片叠在一起，一个淡出，一个淡入
* `$(this).index()`得到点击的这个的序号

****

