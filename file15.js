//sample code

function discountprices(prices, discount){
    var discounted=[];
    for(var i=0; i<prices.length;i++){
        var discountedprice=prices[i]*(1-discount);
        var finalprice= Math.round(discountedprice*100)/100;
        discounted.push(finalprice);
    }
console.log(i);
console.log(discountedprice);
console.log(finalprice);

return discounted;

}

discountprices([100,200,300],.5);



//output
3
150
150
(3) [50, 100, 150]

////// replace var with let

function discountprices(prices, discount){
    let discounted=[];
    var i;
    for(let i=0; i<prices.length;i++){
        let discountedprice=prices[i]*(1-discount);
        let finalprice= Math.round(discountedprice*100)/100;
        discounted.push(finalprice);
    }
console.log(i);
console.log(discountedprice);
console.log(finalprice);

return discounted;

}

discountprices([100,200,300],.5);

///i is not defined
//we cannot access i and other values outside its block.
at discountprices