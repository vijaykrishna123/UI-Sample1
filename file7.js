var foo="bar";
function bar(){
    var foo="baz";
}

function baz(foo){

    foo="bam";
    bam="yay";
}

var a=b();
var c=d();
a;
c;
function b(){
    return c;
}
Var d=function(){
    return b();
}