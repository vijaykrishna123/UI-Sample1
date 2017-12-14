var person=function(name, age){
    return{
        name: name,
        age: age,
        myName: function(){
            console.log(this.name)
        },
        friend: {
            name: 'xyz',
            myName.function() 
            {
            console.log(this.name)    
            }
        }
    }
}
var me= person('abc',1);
me.myName();
me.friend.myName();
