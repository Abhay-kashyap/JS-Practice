// primitive data type
// 7 types :String,Number,Boolean,null,undefined,Symbol,BigInt
const score=100
const scoreValue=100.3;
const isLoggedIn=false;
const outSideTemp=null;
let userEmail;
const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId);
const bigNumber=34578945664n;

// reference type data type(non premitive)
// Array, Objects ,Function  , "memory mai reference diya ja skte hai"

const heros= ['ironman','hulk' ,'superman'];
let myObj={
    name:"harsh",
    age:24,
}
const myFunction=function(){
    console.log('hello world');
}
console.log(typeof heros); //object
console.log(typeof myObj); //object
console.log(typeof myFunction); //function
console.log(typeof bigNumber); //bigInt
console.log(typeof outSideTemp); //object null => type of object
console.log(typeof userEmail); //undefined =>type of undefined
console.log(typeof id); //Symbol => type of Symbol
console.log(typeof scoreValue); //number => type of number also float numbers


/******************************************* */
// stack and heap
let myYouTubename="harsh";
let anotherName=myYouTubename;
anotherName="code with chai"
console.log(anotherName);
console.log(myYouTubename);

let userOne={
    email:'abc@gmail.com',
    upi:"abc@upl",
}
let userTwo= {...userOne};
userTwo.email="ab123@gmail.com";
console.log(userTwo.email);
console.log(userOne.email);