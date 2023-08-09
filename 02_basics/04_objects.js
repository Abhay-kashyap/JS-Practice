// const tinder=new Object(); singleton objects 
const tinderUser={}
tinderUser.id="123abc";
tinderUser.name="sam";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);
const regualrUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
// console.log(regualrUser.fullname.userfullname);

const obj1={1:"a" ,2:"b"}
const obj2={3:"a" ,4:"b"}
const obj4={5:"a" ,6:"b"}
// const obj3={obj1,obj2};object inside objects
// const obj3=Object.assign({},obj1,obj2,obj4);
const obj3={...obj1,...obj2,...obj4}
// console.log(obj3);
//to get object from backend side

const users=[
    {
        id:1,
        email:'h123@gmail.com'
    },
    {
        id:1,
        email:'h123@gmail.com'
    },
    {
        id:1,
        email:'h123@gmail.com'
    }
]
users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));