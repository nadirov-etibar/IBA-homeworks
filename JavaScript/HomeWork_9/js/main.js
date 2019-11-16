// let tabs = document.getElementsByClassName("tabs-title");
// let content = document.getElementsByClassName("content");
//
// for (let i = 0; i < tabs.length; i++) {
//     tabs[i].addEventListener("click", function() {
//         let active = document.getElementsByClassName("active");
//         active[0].className = active[0].className.replace(" active", "");
//         tabs[i].className += " active";
//         let contentActive = document.getElementsByClassName("content-active");
//         contentActive[0].className = contentActive[0].className.replace(" content-active", "");
//         content[i].className += " content-active";
//     });
// }

// WITH DATASET 

let tabs = document.getElementsByClassName("tabs-title");
let content = document.getElementsByClassName("content");

for (let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener("click", function () {
        let idNumber = tabs[i].dataset.id;
        let contentId = document.getElementById("active_tab_"+idNumber);
        for (let j = 0; j < content.length; j++){
            tabs[j].classList.remove("active");
            content[j].classList.remove("content-active");
        }
        tabs[i].classList.add("active");
        contentId.classList.add("content-active");
    })
}

