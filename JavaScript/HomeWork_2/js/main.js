let number = Number(prompt("Enter number"));

while (!Number.isInteger(number)){
    number = Number(prompt("Enter number correctly"));
}

let div = false;

for (let i = 0; i <= number; i++){
    if (i % 5 == 0 && i !== 0){
        div = true;
        console.log(i);
    }
}

if (div == false){
    console.log("Sorry, no numbers");
}


///////////////////// Optional Task \\\\\\\\\\\\\\\\\\\\\\\\

// let m = Number(prompt("Enter the first number"));
// let n = Number(prompt("Enter the last number"));

// while (!Number.isInteger(m) && !Number.isInteger(n)){
//     m = Number(prompt("Enter the first number correctly"));
//     n = Number(prompt("Enter the second number correctly"));
// }

// if (m < n){
//     for (let i = m; i <= n; i++) {
//         let no_simple = false;

        // for (let j = 2; j <= i/2; j++) {
        //     if (i % j == 0){
        //         no_simple = true;
        //     }
        // }

        // if (no_simple == false){
        //     console.log(i);
        // }
    // }
// }

// else{
//     console.log("Enter first number smaller than second number");
// }