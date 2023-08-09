//singleton
//object literals
//Object.create

const mySym=Symbol("key1")
const JsUser={
    name:'hitesh',
    "full name":"hitesh choudhary",
    [mySym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"hitesh@google",
    isLoggedIn:"false",
    lastLoginDays:["monday","saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email="chatgpt.com";
// Object.freeze(JsUser);
JsUser.email="microsoft.com";
console.log(JsUser);





JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user ,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());