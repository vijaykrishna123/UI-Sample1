var a=b();
var c=d();
a;
c;
funtion b(){
    return c;
}
var d=function(){
    return b();
}

/////
var foo="bar";
function bar(){
    var foo="baz";
}

function baz(foo){

    foo="bam";
    bam="yay";
}

////
var foo= function bar();{
var foo="baz";
function bazz(foo)
{
    foo=bar;
    foo;
}
baz();
};
foo();
bar();
