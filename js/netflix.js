var navbar = document.getElementById("nav");
var link = navbar.getElementsByClassName("navbar--link");


for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active--link");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active--link", "");
    }

    this.className += " active--link";
  });
}