 var resStr = '';
 for(var i = 1; i <= 6; i++){
     // 输出空格
     for(var space = 0; space < 6 - i; space++){
         resStr += ' '+" "
     }

     // 输出数字
     for(var num = i; num >0; num--){
         resStr += num + " ";
        
     }
     resStr += '\n'   
 }
 console.log(resStr)