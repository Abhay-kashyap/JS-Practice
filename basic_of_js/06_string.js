const name="harsh";
const repoCount =50;
// console.log(name  +  repoCount +  "value"); not these types use for sting add

// use backets
console.log(`hello my name is ${name} and repocount is ${repoCount}`);
// another way create string
const gameName=new String("harsh-hc-com");
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//checks 2 index which letter
console.log(gameName.indexOf(['r']));//check which index comes letter r comes
const newString=gameName.substring(0,4);
console.log(newString);
 const anotherString=gameName.slice(-7,4);

 console.log(anotherString);
 const newStrings = "    harsh  ";
   
   console.log(newStrings);
   console.log(newStrings.trim());
   const url ="https://hitesh.com/hitesh%20choudary";
console.log( url.replace('%20','_'))
console.log(url.includes('sundar'));
console.log(gameName.split(''));