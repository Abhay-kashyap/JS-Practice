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
// users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// destructure
const course ={
    coursename : "js in hindi",
    price:"999",
    courseInstructor :"hitesh"
}
//course.courseInstructor
// console.log(Object.keys(course));
// console.log(Object.values(course));
// console.log(Object.entries(course));

// destructure the objects 
// const {courseInstructor : instructor}=course 
// console.log(instructor);
// destructure  take a variable and  object {key :'change name of then call these name'} =objectname
const {price :p}=course;
console.log(p);



// json in basic understand
// {
//     "name":"js in hindi",
//     "fees":"free",
//     "courseInstructor":"hitesh",
// }
