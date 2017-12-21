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

var alluserdata = [];
function logstuff(userdata) {
    if(typeof userdata === "string")
    {
        console.log(userdata);
    }
    else if(typeof userData === "object")
    {
for (var item in userdata){
        console.log(item+" "+userdata[item]);
    }
}
}
function getinput(options, callback)
{
    alluserdata.push(options);
    callback(options);
}
getinput({name: "michael", speciality:"JavaScript"}, logstuff);