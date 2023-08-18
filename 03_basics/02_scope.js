
let a=300;
// {} ke bhr global scopes
if(true){
    // {} braces ke andr block scope hota hai
    let a=10;
    const b=20;
    var c=30;
    console.log("inner" ,a);
}
// console.log(a);
// console.log(b);
console.log(a);
// function one(){
//     const username="hitesh";
//     function two(){
//         const website="youtube";
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }
// one()


if(true){
    const username="hitesh";
    if(username==="hitesh"){
        const website="youtube";
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

/******************************** interesting */

console.log(addone(5))
function addone(num){
    return num+1;
}
// console.log(addTwo(5));  because these function is not define asnormal function using function expression that reasons is not called before declaration
const addTwo =function(num){
    return num+2;
}