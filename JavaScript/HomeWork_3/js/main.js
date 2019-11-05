let number_1 = prompt("Enter first number");
let number_2 = prompt("Enter second number");
let operations = prompt("Enter operations");

while (isNaN(number_1) && isNaN(number_2)){
    number_1 = prompt("Enter first number correctly");
    number_2 = prompt("Enter second number correctly");
    operations = prompt("Enter operations");
}

function calc(number_1, number_2, operations) {
    if (operations == "+"){
        let sum = parseInt(number_1) + parseInt(number_2);
        console.log(sum);
    }

    else if (operations =="-"){
        let dec = parseInt(number_1) - parseInt(number_2);
        console.log(dec);
    }

    else if(operations == "/") {
        if (number_2 == 0) {
            console.log("Please change second number.")
        }
        else{
            let div = parseInt(number_1) / parseInt(number_2);
            console.log(div);
        }
    }

    else if (operations =="*"){
        let mult = parseInt(number_1) * parseInt(number_2);
        console.log(mult);
    }
}

calc(number_1, number_2, operations);