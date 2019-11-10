let inputPrice = document.getElementById("price");
let priceDiv = document.getElementById("priceDiv");
let correctPrice = document.createElement("p");
let currentPrice = document.createElement("span");
let deleteBtn = document.createElement("button");

inputPrice.addEventListener("focusin", focusIn);
inputPrice.addEventListener("focusout", focusOut);
function focusIn () {
    inputPrice.style.cssText = "outline:none; border: 1px solid green; color: green;";
    currentPrice.remove();
    correctPrice.remove();
}

function focusOut () {
    let inputPriceVal = inputPrice.value;

    if (inputPriceVal < 0) {
        inputPrice.style.cssText = "outline:none; border: 1px solid red;";
        correctPrice.textContent = "Please enter correct price";
        document.querySelector("script").before(correctPrice);
    }

    else {
        correctPrice.remove();
        inputPrice.style.cssText = "outline:none; border: 1px solid black;";
        currentPrice.textContent = `Current price: $${inputPriceVal}`;
        deleteBtn.style.cssText = "border: 1px solid black; border-radius: 80px; color: black;";
        deleteBtn.textContent = "x";
        priceDiv.before(currentPrice);
        currentPrice.appendChild(deleteBtn);
        deleteBtn.onclick = function () {
            currentPrice.remove();
            inputPrice.value = "";
        };
    }
}