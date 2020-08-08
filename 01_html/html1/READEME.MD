# html第一天

* 老师的笔记：https://docs.qq.com/doc/DVVJ2VFFPbE9JdFJ2

## 一、创建html文件

### 1、html是什么

* html叫做超文本标记语言（HyperText Markup  Language）
  * 代码由“超文本标记”，也就是“标签”组成

### 2、创建文件

* 第一步：创建文件夹
* 第二步：在vscode里面打开文件夹
* 第三步：创建网页

###  3、创建html骨架

* 在vscode输入："!"按tab键骨架就出来了
* 标签要放在body里面

### 4、教程手册

* https://www.runoob.com
* https://www.w3school.com.cn/index.html



## 二、认识HTML骨架

### 1、html骨架的整体结构

* 文档定义

  * ```
    * 
    
    <!DOCTYPE *html*>
    <html *lang*="en">
    <head>
    
        <meta charset="UTF-8">
    
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
      <title>Document</title>
    
    </head>
    
    <body>
    
    </body>
    
    </html>
    ```

* head里面是网页的配置，不是网页的头部
* body里面是用户能够看见的部分
* 代码的缩进，tab
* 代码去掉缩进，shift+tab

### 2、文档类型的声明

* ```
  <!DOCTYPE *html*>
  ```

### 3、详细了解字符集

```
 <meta charset="UTF-8">
```

* meta表示基础配置
* charset是英文：charactor   set
* 默认值是UTF-8，还可以是gb2312和gbk
* 什么是字符集？
  * 计算机内部的语言文字的处理集合

* utf-8,gb2312,gbk的区别？

  * utf-8:由联合国制定，涵盖所有的符号文字，一个汉字三个字节

  * gb2312:由中国制定，涵盖汉字，没有少数名族的文字，有一些韩语和假名，一个汉字两个字节。
  * gbk:由中国制定，涵盖汉字，没有少数名族文字，有少量假名和韩语，增加了一些字。一个汉字两个字符

### 4、title

* 网页的标题，出现在网页的标签栏上

  ![img](F:\web\html\images1\title.png)

## 三、html标签

### h系列标签

* ```
  	<h1>我是1级标题</h1>
      <h2>我是2级标题</h2>
      <h3>我是3级标题</h3>
      <h4>我是4级标题</h4>
      <h5>我是5级标题</h5>
      <h6>我是6级标题</h6>
  ```

  * html是负责页面结构的，语义从h1到h6逐渐变弱。

* h标签负责页面层级，层级清楚的网站会被搜索引擎更好的理解，就有更好的搜索引擎排名。

* 搜索引擎优化（SEO，search engine optimization）。

* **注意：**h1在网页中只能用1次，否则百度视为你在作弊，反而会降低权重（排名）。

### p标签

* 每个段落都要放在p标签里面

* **注意：**有一个特别著名的特点，叫做**“空白折叠性质”**。
  * 空白折叠性质：无论你有多少换行、缩进（tab键）、空格，一律缩成1个空格。

* **p标签中不能放置别的标签**,但是可以放文本属性的标签，比如图片img、超级链接a、加粗文本b等等。
* 换行还有一种写法就是\<br>标签，不过 \<br>没有段落的语义，它是纯换行，不建议过多使用。其实现在网页，几乎没有\<br>了。

### img标签

#### 1、网页中支持的图片格式

* jpg和jpeg： 非常著名的照片的格式，有损压缩，所有的照片都是jpg或者jpeg的
* png：网页图形格式，所有的几何图形（比如logo）都要使用png格式，尺寸非常小。只要图形是几何形状，尺寸一定很小，比jpg小，但是如果png的照片就比jpg大很多倍。
* gif： 动图

* bmp： 是位图
* svg:  矢量图片
* webp：  google谷歌发明的图片，尺寸非常小，阿里在用。
* **注意：**psd（PhotoShop的图片格式）不能往网页中插入的。

#### 2、插入图片的步骤

* 最关键的一步就是，图片必须拷贝到你的**项目文件夹**中。
* 创建一个文件夹，叫做images，不是必须的，但是专业。不能是中文文件夹，因为有的服务器不支持中文。

#### 3、src属性和alt属性

* src： 图片路径

* alt： 当图片加载出现错误的时候，替代文字

* src中要写文件夹的名字，也要写图片的名字。
  * 注意要写.jpg或者.png等等后缀。

```
<img src="images/gou.jpg" alt="">
```

#### 4、相对路径

* 相对于网页的图片存放位置

#### 5、绝对路径

* 绝对路径就是http开头的路径，如果插入互联网上的图片，就可以用绝对路径

* **注意：**下面的写法是错误的：

  * ```
    <img src="C:\Users\shaos\Pictures\关晓彤\79c0c3cac62e876ffb7e57718d447134.jpg" alt="">
    
    ```

    * 这个写法是错误的，为啥？？因为你换个电脑看，就不是这个路径了！！如果你写c:\users\shaos\pictures这样的路径，服务器没有C盘

### a标签

* 老师的笔记：https://docs.qq.com/doc/DVUVEVnB6TVJFbVVE

* 超级链接——anchor
* 任何一个html文件都是一个独立的html骨架，a标签可以让这些html文件成为一个**网**

#### 1、href的属性

* href：是a标签必须要有的内容，表示要跳转的页面，而a标签对之间的内容就是要点击的东西

  * **h**ypertext   **ref**erence:超文本引用

  ```
  <p><a href="02_我的爱好.html">点我去我的爱好页面</a></p>
  ```

#### 2、target 属性

* target：表示打开位置目标，值blank表示空白新窗口。因此该网页可以在空白新窗口中打开。
* 注意：在html4.01标准中，值必须是“_blank”,但是html5中不需要这样写了

```
	<h1>首页</h1>
    <a href="01_我的家乡.html" target="blank">家乡</a>
    <a href="02_我的爱好.html" target="blank">爱好</a>
```

#### 3、图片制作超级连接

```
 <p>
        <a href="06_狗狗.html">
            <img src="../images1/狗狗/0.jpg" alt="">
        </a>
    </p>
```

* 点击图片的时候，页面会跳转到06_狗狗.html页面。

#### 4、title属性

* 超级链接title属性表示鼠标碰到超级链接时文本悬停

```
<a href="06_狗狗.html" title="我是悬停的文本">悬停</a>
```

#### 5、页面内锚点

* 当页面特别长，需要进行**页面定位**的时候，就需要用到锚点，锚点就是页面的定位点

```
 <h1>顶部 <a name="top"></a></h1>
 <h5>底部<a href="#top">点我去顶部</a></h5>
```

##### 1、锚点的使用步骤

* 在需要跳转的标签里面添加一个a标签，a标签里的属性只有name
* 在固定的位置添加a标签，使点击这个a标签的文本能跳转到锚点的位置

##### 2、锚点的注意事项

* 作为锚点的**空标签**没有href属性，而是name属性

  * ```
    <a name="top"></a>
    ```

* 在页面的某个位置加上：

  * ```
     <h5>底部<a href="#top">点我去顶部</a></h5>
    ```

* **注意：**当a标签的href属性以`#`开头,并且没有后缀`.html`时，表示跳转到页面的锚点上，而不是页面上。

### 列表

#### 1、无序列表

* 无序列表表达了一个列表，但是没有顺序之分的语义
* 是一个组合标签
  * ul:unordered list，无序列表
  * li：list item,列表项

* **注意：ul里面*只能*放li标签,li*只能*放在ul标签里面**，但是li里面可以放任意标签

```
 	<ul>
        <li>无序列表</li>
        <li>啊啊啊</li>
        <li>哦哦哦</li>
        <li>呃呃呃</li>
    </ul>
```



* 小知识点：
* 在vscode中安装sublime插件，使用其快捷键
  * ctrl+shift+d:复制当前行
  * ctrl+shift+上/下箭头：表示上/下移动当前行

#### 2、有序列表

* ol:有序列表，就是会自动在li的文本前面标注序号
* ol中只能有li,li里面可以任意

```
	<ol>
        <li>有序列表</li>
        <li>aaa</li>
        <li>bbb</li>
        <li>ccc</li>
    </ol>
```



#### 3、定义列表

* dl:全称definition list定义列表
* dl中可以出现dt和dd,其他标签不能出现
  * 被描述的词语叫dt，全称definition term
  * 描述词dd,全称definition  description描

```
	<dl>
        <dt>北京</dt>
        <dd>中国的首都</dd>
    </dl>
```

* dd中的内容用于描述dt的内容

### div

* 容器级标签

### span

* 行内级标签

## 四、html额外的性质

* 注释:`ctrl+/`

#### 1、转义字符

* 小于号：`&lt`
* 大于号：`&gt`

* 版权符号:`@copy`
* 空格：`&nbsp`









