'use strict'

function showDetails() {
    var image = document.getElementById("image");
    var title = document.getElementById("title");
    var subtitle = document.getElementById("subtitle");
    var text = document.getElementById("text");

    var elementButton = document.getElementsByClassName('button-detail--list');
    var moviesList = JSON.parse(localStorage["mylist"] || "[]");
    var id = localStorage.getItem('id_detail');
    var details;

    details = movies.find(item => {
        if (item.id === +id)
            return item
    });

    moviesList.map(data => {
        if (data === id) {
            elementButton[0].classList.replace("add-list", "remove-list");
        }
    })

    if (image && title && subtitle && text) {
        image.style.background = "linear-gradient(90deg, rgb(0 0 0 / 88%) 20%, transparent 80%), url(../" + details.imageLarge + ") 0 0 no-repeat fixed";
        image.style.backgroundPositionX = "center";
        title.innerHTML = details.title;
        subtitle.innerHTML = "<span>" + details.rating + "% relevante</span> &nbsp; | &nbsp;" + details.duration + "&nbsp; | &nbsp;" + details.year + "&nbsp;  |  &nbsp; " + details.gender;
        text.innerHTML = details.description;
    }
}

showDetails();