const marvelHeros=['thor ','ironman','spiderman'];
const dcHeros=['flash','batman','superman'];
// marvelHeros.push(dcHeros);
// console.log(marvelHeros.sort());
// console.log(marvelHeros[2][1]);
// var herosContainer=marvelHeros.concat(dcHeros);
// console.log(herosContainer);

const all_new_heros=[...marvelHeros,...dcHeros];
// console.log(all_new_heros);
const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const obj={
    name:'hitesh',
    age:24,
}
const real_another_array=anotherArr.flat(Infinity);
console.log(real_another_array);
console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name:'hitesh'}));
console.log(Array.isArray(real_another_array));
let score1=100;
let score2=200;
let score3=300;
console.log(Array.from(score1,score2));