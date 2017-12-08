var a="vijay"; 
function vijay()
{
    var a="Krishna";//global scope
     return a;
    } 
vijay();
var a="rama"; function rama(){var a="Krishna"; return a;} console.log(a);

var file1="new";

funtion new(){
    Var file1="new2";
    console.log(file1);
}
function foo(a){ var b=a*2; function bar(c){console.log(a,b,c);}bar(b*3);}foo(2);