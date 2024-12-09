// right angle pattern
// for (let i=1; i<=5; i++){
//     let pattern= "";
//     for(let j=1; j<=i; j++){
//         pattern+='*';
//     }
//     console.log(pattern);
    
// }

// inverted right angled pattern

// for (let i=5; i>=1; i--){
//     let pattern = "";
//     for (let j=1; j<=i; j++){
//         pattern+="*";
//     }
//     console.log(pattern);
    
// }



// for (let i = 1; i <= 4; i++) {
//     let pattern = " ";
//     for (let j = 1; j <= 7; j++) 
//         pattern += "*";
//     console.log(pattern);
//     }

let rows= 5;

for (let j = 1; j <= rows; j++) 
    if (i === 1 || i === rows || j === 1 || j === rows) {
        let pattern = "";
    } else {
        pattern += " *";
        console.log(pattern);
    }
    
    
