let userInput = document.querySelector(".username"),
  pass = document.querySelector(".password");

userInput.onfocus = function () {
  document.querySelector(".input-div div h5").classList.add("resize");
  document.querySelector("i").classList.add("color");
  document.querySelector(".left1").classList.add("show-line");
};

userInput.onblur = function () {
  if (userInput.value === "") {
    document.querySelector(".one div h5").classList.remove("resize");
    document.querySelector(".one i").classList.remove("color");
    document.querySelector(".left1").classList.remove("show-line");
  } else {
    document.querySelector(".one div h5").classList.add("resize");
    document.querySelector(".one i").classList.add("color");
    document.querySelector(".left1").classList.add("show-line");
  }
};

pass.onfocus = function () {
  document.querySelector(".two div h5").classList.add("resize");
  document.querySelector(".two i").classList.add("color");
  document.querySelector(".left2").classList.add("show-line");
};

pass.onblur = function () {
  if (pass.value === "") {
    document.querySelector(".two div h5").classList.remove("resize");
    document.querySelector(".two i").classList.remove("color");
    document.querySelector(".left2").classList.remove("show-line");
  } else {
    document.querySelector(".two div h5").classList.add("resize");
    document.querySelector(".two i").classList.add("color");
    document.querySelector(".left2").classList.add("show-line");
  }
};
