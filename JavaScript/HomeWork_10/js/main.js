let show = document.getElementById("show");
let inputOne = document.getElementById("inputOne");

show.onclick = function () {
  if (inputOne.type == "password"){
      inputOne.type = "text";
      show.className = show.className.replace("fas fa-eye ", "fas fa-eye-slash ");
  }

  else{
      inputOne.type = "password";
      show.className = show.className.replace("fas fa-eye-slash ", "fas fa-eye ");
  }
};

let hide = document.getElementById("hide");
let inputTwo = document.getElementById("inputTwo");

hide.onclick = function () {
  if (inputTwo.type == "password"){
      inputTwo.type = "text";
      hide.className = hide.className.replace("fas fa-eye ", "fas fa-eye-slash ");
  }

  else {
      inputTwo.type = "password";
      hide.className = hide.className.replace("fas fa-eye-slash ", "fas fa-eye ");
  }
};

let btn = document.getElementById("btn");
let span = document.createElement("span");

btn.onclick = function () {
  let inputOneVal = inputOne.value;
  let inputTwoVal = inputTwo.value;

  if (inputOneVal == inputTwoVal){
      alert("You are Welcome");
      span.remove();
  }

  else{
      span.textContent = "You need to enter the identical values";
      span.style.color = "red";
      btn.before(span);
  }
};