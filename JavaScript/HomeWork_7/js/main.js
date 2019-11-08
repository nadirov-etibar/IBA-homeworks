let arr = ['hello', 'world', 'Baku', 'IBA Tech Academy', '2019', ['1', '2', '3', 'sea', 'user', 23]];

arr.map(function (arrItem) {
    let listUl = document.createElement('ul');
    let listLi = document.createElement('li');
    listUl.appendChild(listLi);
    listLi.innerHTML = arrItem;
    if (typeof arrItem === "object"){
        arrItem.map(function(arrItemSecond){
            let listUlSecond = document.createElement('ul');
            let listLiSecond = document.createElement('li');
            listLi.appendChild(listUlSecond).appendChild(listLiSecond);
            listLiSecond.innerHTML = arrItemSecond;
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