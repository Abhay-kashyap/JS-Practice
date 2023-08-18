function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}
//sayMyName reference ,and () its executes
sayMyName();
// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }
// const result=addTwoNumber(3,5)
// console.log("result" ,result);//result undefined beacuse function not return anything


function add(num1,num2){
    let result =num1+num2;
    return result;
    // not execute this
    console.log("after return not excute this ");
}
// you reutrn something in a function you can store in variable ,but you cannot return anyvalue  in function then you cannot store anyvariable not print 
const result=add(3,5);
console.log("result is", result);

function loginUserMessage(usernmae="sam"){
    if(!usernmae){
        console.log("enter a username");
        return
    }
    return `${usernmae} just logged in`
}
//  console.log(loginUserMessage("hitesh"));
 console.log(loginUserMessage());


//  shopping cart
// function calculateCartPrice( ...num1){
// return num1;
// }

// console.log(calculateCartPrice(200,400,500));
 function priceShopingAdd(val1, val2 ,...num){
    return num;
 }
 console.log('value add in' ,priceShopingAdd(200,500,400,300,470));//200 ,500 store in value in val1 and val2 parameter 


 const user={
    name:"hitesh",
    price:"free"
 }

 function handleObject(anyobject){
    return `user ${anyobject.course} name is and ${anyobject.price} price is`
 }
//  console.log(handleObject(user
// course:"javascript",
// price:"youtube free learning"
//  ))
console.log(handleObject({
    course:"javascript",
    price:399
}));


// const  arr=[200,300,400,550144,445,14,6144]
function myArr(getArray){
    return getArray[11];
}
console.log(myArr([200,300,344,45,5245,3,445,36,54,65,5,545,4,54,456,54]));


//rest operator for use take multiple parameter
function addprice(...num1){
    return num1;
}
console.log(addprice(200,300,400,500));


