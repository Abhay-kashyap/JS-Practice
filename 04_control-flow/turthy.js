const userEmail=[]

if(userEmail){
    console.log("got user email");
}else{
    console.log("don't have email");
}

// falsy value   
// false , 0 ,-0,bigInt 0n,"",null,undefined ,NaN ;


// turthy values
// "0", 'false', " " whitespace,[] ,{},function (){} empty function


if(userEmail.length===0){
    console.log('array is empty');
}


const  emptyObj={};
if(Object.keys(emptyObj).length===0){
console.log('object is empty');
}


// nullish  coalescing operator ?? :null ,undefined
let val1;
// val1=5??10;
// val1=null??10;
// val1=undefined ?? 15
val1=null ?? 10??20
console.log(val1);



// ternary operator

// condition ? true :false

const iceTeaPrice=100;
iceTeaPrice<=80?console.log('less than 80'):console.log('more than 80');;
