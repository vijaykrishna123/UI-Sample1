//how to use closures in javascript?

function Done(){
    console.log("Done");
}
function increment(num, callback){

    for (var i=0;i<=num; i++){
        console.log(i);
    }
return callback();
}
increment(5, Done);

////output
0
1
2
3
4
5
Done
////
//how to pass functions and callback function
var alluserdata = [];
function logstuff(userdata) {
    if(typeof userdata === "string")
    {
        console.log(userdata);
    }
    else if(typeof userData === "object")
    {
for (var item in userdata){
        console.log(item+" "+userdata[item]); ///key: 'value'  obj[key] 
    }
}
}
function getinput(options, callback)
{
    alluserdata.push(options);
    callback(options);
}
getinput({name: "michael", speciality:"JavaScript"}, logstuff);

//ouput undefined

/////
//how this keyword is used
var clientdata= {

id: 12345,
fullName: "Not set",
setUserName: function(firstname, lastname){
    this.fullName = firstname + " " +lastname;
}
}; 
function getuserinput(firstname,lastname,callback){
    callback(firstname,lastname);
}
getuserinput("Steve","Jobs", clientdata.setUserName); 
console.log(clientdata.fullName);
console.log(window.fullName);

}
//output --Not set
//Steve Jobs
//=> undefined

///
//callback, closures examples

