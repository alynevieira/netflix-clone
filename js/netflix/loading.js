'use strict'

function pageLoad() {
  setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loading").remove();
  document.getElementById("main-page").style.display = "initial";
}