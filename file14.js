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