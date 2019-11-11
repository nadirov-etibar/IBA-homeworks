let arr = ['hello', 'world', 'Baku', 'IBA Tech Academy', '2019', ['1', '2', '3', 'sea', 'user', 23]];

arr.map(function (arrItem) {
    let listUl = document.createElement('ul');
    listUl.innerHTML = `<li>${arrItem}</li>`;
    if (typeof arrItem === "object"){
        arrItem.map(function(arrItemSecond){
            let listUlSecond = document.createElement('ul');
            listUl.appendChild(listUlSecond).innerHTML = `<li>${arrItemSecond}</li>`;
        });
    }
    document.querySelector("script").before(listUl);
});

let span = document.getElementById("countDown");
let count = 10;

setTimeout(function countDown () {
    if (count <= 10 && count > 1){
        count--;
    }

    else {
        document.body.innerHTML = "";
    }
    span.innerHTML = count;
    setTimeout(countDown, 1000);
}, 1000);