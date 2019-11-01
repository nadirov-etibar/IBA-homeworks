let number_1 = prompt("Enter first number");
let number_2 = prompt("Enter second number");
let operations = prompt("Enter operations");

while (isNaN(number_1) && isNaN(number_2)){
    number_1 = prompt("Enter first number correctly");
    number_2 = prompt("Enter second number correctly");
    operations = prompt("Enter operations");
}

function increment(number_1, number_2, operations) {
    if (operations == "+"){
        let sum = parseInt(number_1) + parseInt(number_2);
        console.log(sum);
    }
}

function decrement(number_1, number_2, operations) {
    if (operations =="-"){
        let dec = parseInt(number_1) - parseInt(number_2);
        console.log(dec);
    }
}

function division(number_1, number_2, operations) {
    if(operations == "/") {
        if (number_2 == 0) {
            console.log("0")
        }
        else{
            let div = parseInt(number_1) / parseInt(number_2);
                console.log(div);
        }
    }
}

function multiplication(number_1, number_2, operations) {
    if (operations =="*"){
        let mult = parseInt(number_1) * parseInt(number_2);
        console.log(mult);
    }
}

increment(number_1, number_2, operations);
decrement(number_1, number_2, operations);
division(number_1, number_2, operations);
multiplication(number_1, number_2, operations);