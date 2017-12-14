var person=function(name, age){
    return{
        name: 'name',
        age: age,
        myName: function(){console.log(this.name) },
        friend: {
            name: 'om',
            myName: function() 
            {
            console.log(this.name)    
            }
        }
    }
}
var me= person('pqr',21);
console.log(me.myName());
console.log(me.friend.myName());
//output name om 

//////////////////////
var Myname=function(name1, name2, name3){
    console.log('hi'+name)
};

var me={
    name: 'rock', Myname: function(){ console.log(this.name) }
}
var you={
    name: 'jerry', Myname: function(){ console.log(this.name) }
}

console.log(Myname.bind(me));
console.log(Myname.bind(you));

console.log(Myname.call(me));
console.log(Myname.call(you);


console.log(Myname.apply(me));
console.log(Myname.apply(you);

var someArray = [name1, name2, name3]
Myname.apply(me.someArray);
Myname.call(me, name1, name2, name3)
Myname.call(me, name)
//output
////[Function]
//[Function]
//hiundefined
//undefined
//hiundefined
//undefined
//hiundefined
//undefined
//hiundefined

Myname.apply(me)
Myname.apply(you)

var person = function(name,age){
    return {
        name: name, age: age, myName: function(){ console.log(this.name),}
    friend: {name:'abc', myName:function(){ console.log(this.name)}}

    }
}
var sampleObj = new person();
console.log(sampleObj);
//output
//{ name: undefined,
//age: undefined,
//myName: [Function],
//friend: { name: 'abc', myName: [Function] } }
//=> undefined