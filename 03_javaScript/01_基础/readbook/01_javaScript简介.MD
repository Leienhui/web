#  javaScript

* 老师笔记：https://docs.qq.com/doc/DVVVnd25nQWdaaGJR

## 一、javaScript简介

* Brendan Eich（布兰登，爱奇），是JS的发明人。

* document是文档，现在让document文档这个东西**打点儿**，就可以命令它做一些事情。在JavaScript语句中，命令一个东西做事儿，就要让它打点儿。
* 现在命令document文档寻找HTML元素，此时就要用getElementById()。
  * document.getElementById()
  * getElementById意思就是“通过id得到元素”

## 二、JavaScript特点

* ① 有界面，不是枯燥的数学、黑底白字的窗口，交互性强
* ② 遵循C语言的语法模式
* ③ 弱类型的编程语言，比如Java中定义一个整数

## 三、JS的错误类型

### syntaxError语法错误

* 没有写点
* 写成了中文分号

### referenceError引用错误

* btn1忘了写1了
* 引用错误就是你没有语法错误，但是变量没有匹配。
* 你定义的变量名字和要用的变量的名字，没有匹配。

## 四、关于手册

* **高级手册：**

  https://developer.mozilla.org/zh-CN/

  火狐的MDN（谋智开发者社区），这个社区的特点非常的全，非常的细，也非常的全面，但是比较复杂，不适合初学者。

* **初中级手册：**

https://www.runoob.com/ 		菜鸟教程

https://[www.w3school.com.cn/](http://www.w3school.com.cn/)   W3School

* **隆重推荐类似教材风格的手册：**

https://cloud.tencent.com/developer/devdocs 	腾讯开发者文档

## 五、输出语句

* **方法① 弹出警告框**

  ```
  alert(a);
  ```

  * 注意，变量a不能加引号。

* **方法② 控制台输出**

  ```
  console.log(a);
  ```

* **方法③ 做一个h1标签，添加id，用innerHTML属性写它里面的内容。**

  ```javascript
  <h1 id="h1"></h1>
  <script>
      // 得到h1标签
      var h1 = document.getElementById('h1');
  
      // 算一个算式，并且存到变量a中
      var a = (1 + 2 * 3) / 2;
      
      // 可以用这句话将结果显示在h1里面
      // innerHTML就是改里面内容的。
      h1.innerHTML = a;
  </script>
  
  ```

## 六、javaScript中的运算

* JS中，如果要提升运算优先级，必须使用()

* 幂计算
  * **Math.pow(底数, 指数)**

* 平方根
  * **Math.sqrt()**

## 七、**处理用户的输入**

* input表示输入，type是类型的意思，text文本类型。这是一个单标签，不是标签儿对。

```javascript
<input type="text" id="kuang">
    <button id="btn">确定</button>

    <script>
        // 得到文本框本身
        var kuang = document.getElementById('kuang');
        // 得到按钮
        var btn = document.getElementById('btn');

        // 点击按钮的事件监听
        btn.onclick = function() {
            // 得到文本框中的值，value这个英语单词就是值的意思。
            var a = kuang.value;
            // 弹出来
            alert(a);
        };
    </script> 

```

* 老师的笔记：https://docs.qq.com/doc/DVUNiTnROclBjaHZS