//reactjs introduction
for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);

    },i*1000);
}

//6  5 5 5 5 5

////
for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);

    },i*1000);
}
// 0 1 2 3 4
for(var i=0; i<5;i++){
    (function(n){
        setTimeout(function(){
            console.log(n);

        },n*1000);
    })(i);
}
//output
0
1
2
3
4

for(let i=0;i<5;i++){
    setTimeout(()=>console.log(i),i*1000);
}
// 6
0
1
2
3
4

//default arguments
function test(){
    console.log(arguments);
}
test();
///output
Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
callee:ƒ test()
length:0
Symbol(Symbol.iterator):ƒ values()
__proto__:Object
////
function test(){
    console.log(arguments);
    console.log(typeof(arguments));
}
test();
///
Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
object
///
function test(){
    console.log(arguments);
    console.log(typeof(arguments));
    console.log(arguments[0]);
}
test(1,2);
//Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
object 1
//default arguments
function fetchRepos(language,minStars, maxStars, createdBefore, createdAfter){

}
fetchRepos('javascript',200, null,new Date('01/01/2018').getTime(),null);
function fetchRepos({language,minStars, maxStars, createdBefore, createdAfter}){
    
    }
fetchRepos({
    language:'JavaScript',
    maxStars:null,
    createdAfter:null,
    createdBefore:new Date('01/01/2018').getTime(),
    minStars:100
})
//spread operator
//rest operator
reduce the code we msWrite

//ex spread operator
let a=[2016,2017,2018];
let b=[...a,2019,2020]
console.log(b);
//[ 2016, 2017, 2018, 2019, 2020 ]

//rest operator example
function test(a,b,... rest){
    console.log(a,b);
    console.log(...rest);
}
test(5,6,7,8,9,11);

//output-New ES6 features
5 6
7 8 9 11

//classes
syntax for classes
class name{
    console.log(type(name));
}
//classes look better when compared to prototype based inheritance
//each class has constructor function
class sampleclass{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
}
samplefun1(){

}
class sampleclass2 extends sampleclass{
     super.samplefun1()
}

//intially javascript
//after they created jQuery //redundant code is removed, need not write from scratch
//after jQuery they added Models
//MVC Architecture
//React JS--- compress all code into single function
//with React JS - we can add the function to library- we can access 100 of lines
//this is called declarative programming
//map function


//declarative programming example
let arr2=[1,2,3];
let modified2= arr2.map(function(item){
    return item*3;
});
console.log(modified2);

//(3) [3, 6, 9]





