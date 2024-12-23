// function square(n){
//     return n*n;
// }
// function cube(n){
//     return n*n*n;

// }
// function sumSquare(a,b){
//     let square1 = square(a);
//     let square2 = square(b);
//     return square1+ square2;
// }
// function sumCube(a,b){
//     let cube1 = cube(a);
//     let cube2 = cube(b);
//     return cube1 + cube2;
// }
// let ans = sumCube(2,4)
// console.log(ans);



////// using callback function

function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;

}
function quad(n){
    return n*n*n*n;

}
function sumOfSomething(a,b, fn){
    let square1 = fn(a);
    let square2 = fn(b);
    return square1+ square2;
}

let ans = sumOfSomething(2,4, quad);
// console.log(ans);

function greet(name, callback){
    console.log("Hii", name);
    callback();
}
function sayGoodBye(){
    console.log("Goodbye");
    
}
greet("Ikrama", sayGoodBye);




