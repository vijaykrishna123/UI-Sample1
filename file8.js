
var sampleObj = {
name: 'object1',
address: '25200 i45n',
height: 7,
sampleFun: function(){

},
places:[]
}
console.log(sampleObj.name);
console.log(sampleObj.address);
console.log(sampleObj.height);
console.log(sampleObj.sampleFun);
console.log(sampleObj.places)
//output object1 25200 i45n 7 ƒ (){ } []
//undefined

sampleObj.sampleproperty = 'sample';
console.log(sampleObj);

//output {name: "object1", address: "25200 i45n", height: 7, places: Array(0), sampleFun: ƒ, …}

//this keyword
var me = {
    name: 'chitti',
    Myname: function vijay(){ 
        console.log(this.name)
    }
    }


var me2 = {
    name: 'robo',
    Myname: function(){
        console.log(this.name)
    }
    }
me.Myname; //output [function : sai]
me.MyName(); //chitti


////

var sampleFun= function(){
    console.log(this.name);
}
var me={
    name: 'sai',
    sampleFun: sampleFun
}
var you={
    name: 'ram',
    sampleFun: sampleFun
}
me.sampleFun();  //sai
you.sampleFun(); //ram

window.alert("UI Class");

