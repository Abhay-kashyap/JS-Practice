const score=400;
console.log(score);
const balance =new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
const otherNumber =123.896
console.log(otherNumber.toPrecision(3));
const hunderd=100000;
console.log(hunderd.toLocaleString('en-IN'));
//*************************maths  */
console.log(Math);
console.log(Math.abs(4));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.1));
// check in array min value
console.log(Math.min(3,5,6,8))
// check in array max value
console.log(Math.max(4,8,9,1,0));
console.log(Math.random());//values comes under 0 and 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
const min=10;
const max=20;
console.log(Math.floor(Math.random() *  (max -min +1)) +min );