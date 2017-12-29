
//ES6 or ECMA Script 2015
//Arrow function
var test = function sample(){
    //logic
    return ;
}
var test = () =>{ //fat arrow

}
//how to access this keyword
arrow_f1 
{
arrow_f2{
    console.log(this)
}
}
//how to remove the function keyword is done with Arrow
var test = () => ({})

//example of arrow functions
var arguments = ['howtouse','arrowfunction', 'syntax'];
var arr = () => arguments[0];

arr(); 
//output "howtouse"

    var greetings = [
        'Happy',
        'new',
        'year',
        '2018'
    ];
    ///(4) [5, 3, 4, 4]-- output
    greetings.map(function(material) { 
        return material.length; 
    });

    //example 
    var test = () =>{abcd}
    console.log(test);
    //output   () =>{abcd}

    console.log(typeof(test));
    //output function
/////////

//using let and constant keyword
let obj1;
console.log(obj1);

//undefined


console.log(obj2);
let obj2;

//error Uncaught ReferenceError: obj2 is not defined

console.log(obj3);
var obj3;
// undefined

//how to use constant keyword
 
const a= 1;
a=2;
//error--Uncaught SyntaxError: Identifier 'a' has already been declared
const b={c:'d'} 
b.c='e';
//ouput "e"

const obj = { city: 'houston'}
obj.city = 'California';
console.log(obj);
//output {city: "California"}

///how we use destructing-- object destructing, array destructuring 
object destructuring removes similar linesof code


var p, q, r;
[p, q] = [2017, 2018];
console.log(p); 
console.log(q);
// 2017
//2018


////
var q1, q2;

[q1=5, q2=7] = [1];
console.log(q1); 
//output 1 
console.log(q2);
//output 7

var person = ['jai','25', 'TX'];
var name = person[0];
person[0]; //ouput "jai"
var [name, age, location] = person;


var name= person.name;
var age= person.age;
var location= person.location;
//same as var {name, age, location}= person;

//////
//template literals
console.log(' line1 line2 lkjfkslgjsflkgvfvsflmflsfvnkfjvnsfnvs');
line1 line2 lkjfkslgjsflkgvfvsflmflsfvnkfjvnsfnvs
console.log(`backtick1
backtick2`);
//output
backtick1
backtick2

console.log('backtick1 \n dgmdklgmf;ldle\n  l;slf,sdl;f, \n backtick2');
//output
backtick1 
dgmdklgmf;ldle
 l;slf,sdl;f, 
backtick2

//example
var n=2017;
var o=2018;
console.log('adding 2017+2018 is ' + ( n + o ) + 'and\nnot' + (2* n + o)+ '.');
//ouput
adding 2017+2018 is 4035and
not6052.

console.log('adding 2017+2018 is ' + ( n + o ) + 'and\nnot' + (2* n + o)+ '.');

var n=2;
var o=2;
console.log('adding 2+2 is ' + $( n + o )  and not + $(2* n + o)+ '.');


var a11=5;
var b11=10;
console.log(`fifteen is ${a11+b11} and
not ${2* a11 + b11}`);
output
///fifteen is 15 and 
//not 20

console.log('adding 2017+2018 is ' + $( n + o ) and  not $(2* n + o)+ '.');
