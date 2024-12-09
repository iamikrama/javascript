//  to print odd no.
// for (let i=0; i<10; i=i+2){
//     console.log(i+1);
    
// }


//  to print num from 1 to 10

// for (let i=0; i<10; i++){
//     console.log(i+1);
    
// }


// for (let i=0; i<3; i++){
//     console.log("Hello");
    
// }


// print even no from 2 to 20
// console.log("all even nos between 2 an 20 are ");

// for (let i=2; i<20; i=i+2){
//     console.log(i)
    
// }


//  count backwards

// for(let i=10; i>=1; i--){
//     console.log(i);
    
// }

// let sum= 0;
// for(let i=1; i<=5; i++){
//     sum+=i;
// }
// console.log(sum);


// print items in an array

// let fruits= ["Bnana", "Apple", "Mango"];
// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
    

// }


// multiply nos in aray by 2

// let numbers= ["2", "2", "3", "4", "5"];
// for (let i=0; i<numbers.length; i++){
//     console.log(numbers[i]* 2);
    
// }

//  multiplication table of 2
// for (let i = 1; i <= 10; i++) {
//         console.log(`2 * ${i} = ${2 * i}`);
//     }

    // let nums = [21, 5, 20, 8];
    // let max = nums[0];
    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] > max) {
    //         max = nums[i];
    //     }
    // }
    // console.log(max); // Output: 20
    

    let nums = [3, 7, 1, 9, 4];
let result = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 5) {
        result.push(nums[i]);
    }
}
// console.log(result); // Output: [7, 9]



// FOR OF LOOP 


// const arr = [1,2,3,4,5];
// for ( const num of arr) {
//     console.log(num); 
    
// }


const arr= [2,3,4,5,6]
for (const num of arr) {
    // console.log(num);
    
}
const greetings= "hello Ikrama";
for (const greet of greetings) {
    // console.log(`Each char of greetings is ${greet}`);
    
}

// MAP :- map object holds key value pair and remembers the original insertion order of keys

const map= new Map();
map.set('IN', "India")
map.set('Fr', "France")
map.set('USA', "United States Of America")
map.set('BR', "Bihar")

// console.log(map);

// USING FOr OF Looop in MAP


for (const key of map) {
    // console.log(key); // gives only key of this map
    
}


for (const [key, value] of map) { // always use bracket [] to see the key value pair
    // console.log(key, ':-', value); // this is the destructuring of map object and also gives the key value pair. 
    
}


// FOR OF LOOP IN OBJECT

const newGame= {
    game1: 'NFS',
    game2: 'Cat walk'
}
// for of loop is not iteratble in OBJECT

// ****FOR Object there is FOR IN LOOP*** 
const anotherGame= {
    game1: 'NFS',
    game2: 'Cat walk',
    game3: 'Ninja Hathodi'
}
for (const key in anotherGame) {
   
        // console.log(`${key}, and game is ${anotherGame[key]}`);
        
}

// FOR IN LOOP IN ARRAY
const newArr= ["js", "panda", "apple", "swift"]
for (const key in newArr) {
    // console.log(newArr[key]);
}

// FOR EACH LOOP 


const fruits= ["Apple","Mango", "Banana"];
fruits.forEach((fruit)=>{
    // console.log(fruit);
    
});


// adding numbers using foreach loop
const numbers= [1,2,4,6,7,8];
let sum= 0;
numbers.forEach((num)=>{
    sum+=num;
});
// console.log(sum);

const indices= ["Ball", "Bat", "Football"];
indices.forEach((ind, index)=>{
    // console.log(`${index}, and ${ind}`);
    
});

// Create a new array where each number is doubled using forEach.


const newNum= [2,3,4,5,6];
let doubled= [];
newNum.forEach((num)=>{
    doubled.push(num*2);
});
// console.log(doubled);



