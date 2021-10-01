document.getElementsByClassName("cabeca").onmouseover = function () {
  mouseOver();
};
document.getElementsByClassName("cabeca").onmouseout = function () {
  mouseOut();
};

function mouseOver() {
  console.log("entrou");
}

function mouseOut() {
  console.log("saiu");
}