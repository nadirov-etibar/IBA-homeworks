let name = prompt("Enter your name");
let surname = prompt("Enter your surname");
let birthDay = prompt("Enter your birthday dd.mm.yyyy");
let date = new Date();

function creatNewUser(userName, userSurname, userBirthDay) {
    this.userName = name;
    this.userSurname = surname;
    this.userBirthDay = birthDay;
    let newUser = {
        firstName: this.userName,
        lastName: this.userSurname,
        birthDay: this.userBirthDay,
        getLogin: function () {
            let nickName = this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
            return nickName;
        },
        getAge: function () {
            let age = date.getFullYear() - this.birthDay.slice(-4);
            return age;
        },

        getPassword: function () {
          let password = this.firstName.charAt(0).toUpperCase() + this.lastName.toLowerCase() + this.birthDay.slice(-4);
          return password;
        }
    };
    return newUser;
}

let someUser = creatNewUser();
console.log(someUser.getLogin());
console.log(someUser.getAge());
console.log(someUser.getPassword());