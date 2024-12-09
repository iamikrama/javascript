// singleton
// object.create // through constructor
// object literals 

const mySym= Symbol("key1")
const JsUser = {
        name: "Ikrama",
        age: 20,
        [mySym]: "mykey1",
        location: "New Delhi",
        email: "iamikrama@gmail.com",
        isLoggedIn: false, 
        lastLoginDays: ["Monday", "Tuesday"],
}
//  console.log(JsUser.email); // normally to know the value of any key
//  console.log(JsUser["email"]); 
//  console.log(JsUser[mySym]); 
 
JsUser.email= "akhtarmdikrama@gmail.com" /// to override any values 
// console.log(JsUser.email); //output values override

// Object.freeze(JsUser)

JsUser.email= "akhtarmdikrama@google.com"
// console.log(JsUser);

// JsUser.greeting= function(){
//     console.log("Hello user im Ikrama");   
// }
// JsUser.greetingTwo= function(){
//     console.log(`Hello user, ${this.name}`);   
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const tinderUser = new Object()  // singleton object
const tinderUser ={} // non singleton object
tinderUser.Id = "123abc"
tinderUser.name= "Mehvii"
tinderUser.issLoggedIn= false
console.log(tinderUser);


