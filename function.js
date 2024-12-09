//add two numbers using function 
// function addTwoNumbers(no1, no2){
//     console.log(no1+no2);  
// }
// addTwoNumbers(3,4)

function loginUserMessage(username){
    return (`hey ${username} Assalamu Alaikum`)
}
// console.log(loginUserMessage("ikrama"));
const user={
        username: "mehvii",
        password: "mehvii123"
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and password is ${anyObject.password}`);

}
handleObject(user)
