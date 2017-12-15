//closure implementation
function myfunction(){
    var a=10;
    return a*a;
}
var a=9;

function myfunction(){
    return a*a;
}
/////
a=25;
function samplefunction(){
a=5;
}
////
var counter=100;
function add(){
    counter += 1;

}
console.log(add());
console.log(add());
console.log(add());

//output 101,102,103
////
function add(){
var counter=123;
counter+=1;
}


add();
add();
add();
//output 123,123,123
//////
function add(){
    var c=1;
    function plus(){
        c+=1;
    }
    plus();
    return c;
}
add();
//output 2
  //counter variable to be initialised once
  //they want to increment counter using add function
  //they want private access to variable
  var add = function(){
      var counter=2;
      return function(){
          return counter += 1;

      }
  }
  var add = function(){
    var counter=2;
    return function(){
        return counter += 1;

    }
}();

add();
////
var a=function(){
    return function(){}
}
console.log(a());
////
var somevariable = function add(){
    var p=1;
    return function plus(){
        counter+=1;

    }
}
 add();
 plus();
 somevariable();


 //////
 var add = function(){
    var counter=2;
    return function(){
        return counter += 1;

    }
}();
console.log(add);
console.log(add());

add = function(){
    return counter+=1;
  }
//output [function]    3   [function]
//closures in javascript
var add = (function(){
    var counter=2;
    return function(){
        return counter += 1;

    }
})();
add = function(){
    return counter+=1;
  }
  //[function]