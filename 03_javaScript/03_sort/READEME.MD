# 排序

##  冒泡排序

* ```javascript
  	<script>
          var arr=[23,45,6,7,98,12,55];
          for(var i=0;i<arr.length - 1;i++){
              for(var j=0;j<arr.length-i-1;j++){
                  if(arr[j]>arr[j+1]){
                      var change=arr[j];
                      arr[j]=arr[j+1];
                      arr[j+1]=change
                  }
              }
          }
          console.log(arr);
      </script>
  ```

* ![](F:\web\javaScript\js1\images\1.png)

##  快速排序（二分法排序）

## 选择排序

