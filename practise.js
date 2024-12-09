//+++++++traffic light+++++++

// let color = "yellow";
// if (color =="red") {
//     console.log("you must stop");
// } 
// if (color=="green"){
//     console.log("stop and slow down ur vehicles");
    
// }
// if (color="yellow"){
//     console.log("you can go now");
    
// }

////////////++++++++ check age for voting

// let age= 19;
// if (age>=18){
//     console.log("a person can vote");
    
// } else{
//     console.log("a person cant vote");
// }


/////+++++++ odd or even no

// let number = 8;
// if (number % 2=== 0){
//     console.log(`the number ${number} is even`);
    
// }else{
//     console.log(`the number ${number} is odd`);
// }


////+++++++ comparison of two numbers

// let num1= 3;
// num2= 3
// if (num1===num2){
//     console.log(`${num1} and ${num2} both are equal`);
    
// }else if (num1>num2){
//     console.log(`${num1} is greater than ${num2}`);
    
// } else {(num1<num2)
//     console.log(`${num1} is smaller than ${num2}`);
// }

/////++++++ check divisibilty by 5

// let number = 55;
// if (number % 5 === 0 ){
//     console.log(`${number} is divisible by 5`);
    
// } else {
//     console.log(`${number} is not  divisible by `)
    
// }

// let char = 'E';
// if ("aeiouAEIOU".includes(char)) {
//     console.log("Vowel");
// } else if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
//     console.log("Consonant");
// } else {
//     console.log("Not a letter");
// }


// let player1 = "rock";
// let player2 = "paper";

// if (player1 === player2) {
//     console.log("It's a tie!");
// } else if (
//     (player1 === "rock" && player2 === "scissors") ||
//     (player1 === "scissors" && player2 === "paper") ||
//     (player1 === "paper" && player2 === "rock")
// ) {
//     console.log("Player 1 wins!");
// } else {
//     console.log("Player 2 wins!");
// }


// import { createInterface } from 'readline';

// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function chatbotResponse(userInput) {
//     let input = userInput.toLowerCase();

//     if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
//         console.log("Chatbot: Hello! How can I assist you today?");
//     } else if (input.includes("how are you")) {
//         console.log("Chatbot: I'm just a bot, but I'm doing great! How about you?");
//     } else if (input.includes("weather")) {
//         console.log("Chatbot: The weather is always different, but I hope it's nice where you are!");
//     } else if (input.includes("bye")) {
//         console.log("Chatbot: Goodbye! Have a great day!");
//         rl.close();
//     } else {
//         console.log("Chatbot: Sorry, I didn't understand that. Can you ask something else?");
//     }
// }

// rl.question('You: ', (answer) => {
//     chatbotResponse(answer);
//     rl.close();
// });

// const favMovie= "avatar";
// let guess = prompt("guess my fav movie");
// while( (guess != favMovie) && (guess!="quit") ){
//     guess = prompt("wrong guess, please try again ");
// }
// if (guess== favMovie){
//     console.log("you guess right");
    
// }else {
//     console.log("you quit");
    
// }

// let heroes = [
//     ["ironman", "superman", "batman"],
//     ["ikrama", "flash", "shaktiman"]
// ]
// for (let i=0; i<heroes.length; i++){
//     console.log(i, heroes[i], heroes[i].length);
//     for (let j=0; j<heroes[i].length; j++){
//         console.log(`j=${j}, ${heroes[i][j]}`);
        
//     }
    
// }


// let fruits= ["mango", "apple", "orange", "guava"]
// for( fruit of fruits){
//     console.log(fruit);
    
// }

// for (char of "ikrama"){
//     console.log(char);
    
// }

// let todo =[];
// let req = prompt("enter your request");
// while (true){
//     if (req== "quit" ){
//         console.log("you quit the todo app");
//         break;
//     }

//     if (req== "list")
// }
