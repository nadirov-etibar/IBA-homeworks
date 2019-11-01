let name = prompt("Enter your name");
let age =prompt("Enter your age");

while (!isNaN(name) || isNaN(age)) {
    name = prompt("Enter your name correctly");
    age = parseInt(prompt("Enter your age correctly"));
}

if (age < 18){
    alert("You are not allowed to visit this website.");
}

else if (age >= 18 && age <= 22 ){
    let confirm_msg = confirm("Are you sure you want to continue?");
    if (confirm_msg){
        alert("Welcome "+ name);
    }
    else{
        alert("You are not allowed to visit this website.");
    }
}


else if (age > 22){
    alert("Welcome " + name);
}
