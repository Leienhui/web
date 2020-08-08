# 俄罗斯方块

## 表格

```html
<table>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
    </table>
```

```css
table{
            /* 让表格边框变成单线的 */
            border-collapse: collapse;
        }
        td{
            border: 1px solid #ccc;
        }
```

* table表格
* tr行
* td每个小格

## 小知识

```javascript
 var arr;
 arr[3]=1;//报错；因为arr不是数组，加方括号就有undefined加方括号的错误了
```

* Uncaught TypeError: Cannot set property '3' of undefined