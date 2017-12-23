//callback within callback syntax
function(task1, callback1){
//task1
//cb1(task2, callback2){
    //task2
    callback2(task3, callback3){
        ......
    }
}
}

//Promise API
//Infuture it will fulfill task
var p = new Promise(function(resolve, reject){
    if( /* good condition */)
    resolve("success");
    else{
        reject("failure");
    }
});
//syntax for resolve, reject, pending

function(resolve, reject){
    //if everything is fine
    //try to fetch some data from server
    //some task here
    // you received data
    resolve(data);
    //if something goes wrong
    //i got error
    reject(error);
}

//example
var ismomhappy = false;
//Promise
var willgetnewphone = new Promise(
    function(resolve, reject){
        if(ismomhappy){
            var phone={
                brand : 'apple',
                color : 'jetblack'            }
        };
        resolve(phone);//fulfilled
    }
    else{
        var reason =new error('mom  is not happy');
        reject(reason); //reject
    }
    }
);
///
console.log(new Promise(function(resolve, reject){
    resolve('test');
  }));

//Promise {<resolved>: "test"}

console.log(new Promise(function(resolve, reject){
    reject('test failed');
  }));
  //Promise {<rejected>: "test failed"}
  ///
  console.log(new Promise(function(resolve, reject){
    
   }));
   //Promise {<pending>}

   ///
   console.log(new Promise(function(resolve, reject){
    resolve('test');
    
  }).then(function(data){
    console.log(data);
  }));
  //output Promise {<pending>}
//test

console.log(new Promise(function(resolve, reject){
    resolve('test');
    
  }).then(function(data){
    console.log(data);
    return data;

  }).then(function(data2){
      console.log(data2 + 'data2');
  })
);

//output Promise {<pending>}
//test
//testdata2
//undefined
