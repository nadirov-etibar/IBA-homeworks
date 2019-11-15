let changeButton = document.getElementById("changeTheme");
let colorText = document.getElementsByClassName("login");
let logo = document.getElementsByClassName("logo");
let check = document.getElementsByClassName("checkbox_label");
let form = document.getElementsByClassName("form_div");
let colorBg = document.getElementsByClassName("btn_green");


changeButton.addEventListener("click", function () {
    for (let i = 0; i < colorText.length; i++){
        colorText[i].classList.toggle("color_text");
    }

    for (let i = 0; i < logo.length; i++){
        logo[i].classList.toggle("logo_second");
    }

    for (let i = 0; i < check.length; i++){
        check[i].classList.toggle("checkbox_label_second");
    }

    for (let i = 0; i < form.length; i++){
        form[i].classList.toggle("form_div_second");
    }

    for (let i = 0; i < colorBg.length; i++){
        colorBg[i].classList.toggle("btn_red");
    }

    if (colorBg[0].classList.contains("btn_red")) {
        localStorage.setItem("New Background", "red");
    }

    else {
        localStorage.removeItem('New Background');
    }
});

if (localStorage.getItem("New Background")){
    for (let i = 0; i < colorText.length; i++){
        colorText[i].classList.toggle("color_text");
    }

    for (let i = 0; i < logo.length; i++){
        logo[i].classList.toggle("logo_second");
    }

    for (let i = 0; i < check.length; i++){
        check[i].classList.toggle("checkbox_label_second");
    }

    for (let i = 0; i < form.length; i++){
        form[i].classList.toggle("form_div_second");
    }

    for (let i = 0; i < colorBg.length; i++){
        colorBg[i].classList.toggle("btn_red");
    }
}