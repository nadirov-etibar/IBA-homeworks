let name = prompt("Enter your name");
let surname = prompt("Enter your surname");

function creatNewUser(userName, userSurname) {
    this.userName = name;
    this.userSurname = surname;
    let newUser = {
        firstName: this.userName,
        lastName: this.userSurname,
        getLogin: function () {
            let nickName = this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
            return nickName;
        }
    };
    return newUser;
}

let someUser = creatNewUser();
console.log(someUser.getLogin());