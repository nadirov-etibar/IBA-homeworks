let buttons = document.getElementsByClassName("btn");

window.onkeydown = function (e) {
    for (let i = 0; i < buttons.length; i++){
        buttons[i].className = buttons[i].className.replace(" btn-active", "");
    }
    if (e.code == "Enter"){

        buttons[0].className += " btn-active";
    }

    else if (e.code == "KeyS"){
        buttons[1].className += " btn-active";
    }

    else if (e.code == "KeyE"){
        buttons[2].className += " btn-active";
    }

    else if (e.code == "KeyO"){
        buttons[3].className += " btn-active";
    }

    else if (e.code == "KeyN"){
        buttons[4].className += " btn-active";
    }

    else if (e.code == "KeyL"){
        buttons[5].className += " btn-active";
    }

    else if (e.code == "KeyZ"){
        buttons[6].className += " btn-active";
    }
};