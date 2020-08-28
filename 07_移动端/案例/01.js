var foo=3;
function  f() { 
    console.log(foo);
    console.log(typeof foo);
    foo=5;
    console.log(foo);
    console.log(typeof foo);

    function foo(){}
 }
 f();
 console.log(foo);
 console.log(typeof foo);
