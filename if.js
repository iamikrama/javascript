// let isRaining = false;
// if (isRaining== true){
//     console.log("bring umbrella for me");    
// } else if (isRaining== false){
//     console.log("umbrella is not required");
    

// }


// let age= 18;
// if (age==10){
//     console.log("you can watch this movie");
// } else if (age<=10){
//     console.log("'you are too young to watch this movie, watch pogo instead");
    
// } else if (age>=18){
//     console.log("you are now adult and watch 18+ movies");
    
// }

// Check if your score is above 50. If it is, say "You passed!". If it’s less, say "Try again!".

// let score= 50;
// if (score>=50){
//     console.log("you passed");
    
// } else if (score<50)
//     console.log("better luch next time");

   
// If the number is even, say "Even number". If it’s odd, say "Odd number".

// let num= 32;
// if (num%2===0){
//     console.log("the no is even ");
    

// } else{
//     console.log("num is odd");
    
// }

// If you have more than 5 candies, say "Yay, I have lots of candies!". Otherwise, say "I need more candies".

// let candies= 6;
// if (candies>5){
//     console.log("yay, i have lots of candies");
    
// } else {
//     console.log("i need more of candies");
// }

// Check if the number is positive, negative, or zero, and print the result.

// let num= 10;
// if (num>0){
//     console.log(`num ${num} is positive`);
    
// }else if(num<0){
//     console.log(`num ${num} is negative`);
    
// } else{
//     console.log(`num ${num} is zero`);
    
// }



// If the temperature is above 30 degrees, tell me "It’s hot". If it’s between 20 and 30, say "It’s warm". If it’s below 20, say "It’s cold".


// let temperature= 51;
// if (temperature>30){
//     console.log("its hot outside");
// }else if(temperature >=20 && temperature<=30){
//     console.log("its warm ");
    
// }else {
//     console.log("its cold");
    
// }


// Check if a number is divisible by both 3 and 5, and print "FizzBuzz". If it’s only divisible by 3, print "Fizz". If it’s only divisible by 5, print "Buzz".

// let num= 21;
// if (num%3===0 && num%5===0){
//     console.log("FizzBuzz");
// } else if (num%3===0){
//     console.log("Fizz");
    
// }else {
//     console.log("Buzz");
    
// }


// Check if a person is eligible to vote. A person must be at least 18 years old and a citizen.


// let age= 18;
// let citizen= false
// if (age>=18 && citizen){
//     console.log("you are eligible to vote");
    
// } else{
//     console.log("you are not eligible");
    
// }


// Based on a score, print the grade:

// O for score 90 and above
// A for score 70-89
// B for score 50-69
// C for below 50



// let score=49;
// if (score>=90){
 
//     if (score>=90){
//         console.log(`this is your score ${score} and Grade is : O`);
//     }
    
// } else if (score>=70 && score<90){
   
//     if (score>=70 && score<90){
//         console.log(`this is your score ${score} and Grade is : A`);
//     }
    
// } else if (score>=50 && score<70){
    
//     if (score>=50 && score<70){
//         console.log(`this is your score ${score} and Grade is : B`);
//     }
    
// }else{
//     console.log(`this is your score ${score} and Grade is : C`);
    
// }


// let totalPurchase= 53;
// let discount;
// if (totalPurchase>=100){
//     discount=0.8;
    
// }
// if (totalPurchase>=50 && totalPurchase<100){

//     discount=0.9;
// }
// let totalPrice = totalPurchase*discount;
// console.log(`Total Price is : $${totalPrice}`);


// let year = 2025;
// if ((year%4===0 && year%100 !==0) || (year %400===0)){
//     console.log("given year is leap year");
    
// }else{
//     console.log("year is not leap year");
    
// }



// let char= "A";
// if (char==="A" || char ==="E" || char==="I" || char=== "O" || char=== "U"||
// char==="a" || char ==="e" || char==="i" || char=== "o" || char=== "u") {
//     console.log("char is vowel: " + char);

// }else{
//     console.log("cahr is consonant");
    
// }


// let num= 4, upper= 15, lower=10;
// if (num>=lower && num<=upper){
//     console.log("the num is between "+ lower + "and "+ upper);
    
// }else {
//     console.log("The number is not between " + lower + " and " + upper);
// }


// let age=15;
// if (age>=15 && age<=17){
//     console.log("this person is in teenage");
    
// }else if (age>=18){
//     console.log("person is adult");
    
// }else{
//     console.log("person is child");
    
// }


// let num = 9;

// if (num > 10 && num < 100) {
//     console.log("The number is greater than 10 and less than 100.");
// } else {
//     console.log("The number is not in the range of 10 to 100.");
// }


//  checking if the num is two digit


// let num= 133;
// if (num>9 && num<100){
//     console.log("the number is two digit");
    
// }else{
//     console.log("the number is one digit");
    
// }

// let num = 64;
// let sqrt = Math.sqrt(num);

// if (sqrt === Math.floor(sqrt)) {
//     console.log("The number is a perfect square.");
// } else {
//     console.log("The number is not a perfect square.");
// }

// let score = 0;

// let answer1 = "A";  // User's answer
// let answer2 = "B";  // User's answer
// let answer3 = "B";  // User's answer

// if (answer1 === "A") {
//     score++;
// }
// if (answer2 === "B") {
//     score++;
// }
// if (answer3 === "B") {
//     score++;
// }

// if (score === 3) {
//     console.log("You got all the answers correct! Your score is: " + score);
// } else if (score === 2) {
//     console.log("Great job! You got 2 out of 3 right. Your score is: " + score);
// } else {
//     console.log("Better luck next time. Your score is: " + score);
// }


// let accountType = "checking";  // can be "checking" or "savings"
// let balanceChecking = 1000;
// let balanceSavings = 2000;
// let withdrawAmount = 500;

// if (accountType === "checking") {
//     if (withdrawAmount <= balanceChecking) {
//         balanceChecking -= withdrawAmount;
//         console.log("Withdrawal successful! Remaining balance: " + balanceChecking);
//     } else {
//         console.log("Insufficient funds in checking account.");
//     }
// } else if (accountType === "savings") {
//     if (withdrawAmount <= balanceSavings) {
//         balanceSavings -= withdrawAmount;
//         console.log("Withdrawal successful! Remaining balance: " + balanceSavings);
//     } else {
//         console.log("Insufficient funds in savings account.");
//     }
// } else {
//     console.log("Invalid account type.");
// }



// let board = [
//     ['O', 'O', 'X'],
//     ['X', 'X', 'O'],
//     ['X', 'O', 'X']
// ];

// // Check rows
// for (let i = 0; i < 3; i++) {
//     if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
//         if (board[i][0] !== '') {
//             console.log(board[i][0] + " wins!");
//             break;
//         }
//     }
// }

// // Check columns
// for (let i = 0; i < 3; i++) {
//     if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
//         if (board[0][i] !== '') {
//             console.log(board[0][i] + " wins!");
//             break;
//         }
//     }
// }

// // Check diagonals
// if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
//     if (board[0][0] !== '') {
//         console.log(board[0][0] + " wins!");
//     }
// } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
//     if (board[0][2] !== '') {
//         console.log(board[0][2] + " wins!");
//     }
// }

// // Check for draw or ongoing
// let draw = true;
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (board[i][j] === '') {
//             draw = false;
//             break;
//         }
//     }
// }

// if (draw) {
//     console.log("It's a draw!");
// } else {
//     console.log("The game is still ongoing.");
// }



