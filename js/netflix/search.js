'use strict'

var show_list_search = function (list) {
    var divList = document.getElementById("list");
    var divMovies = document.getElementById("movies");
    var divSeries = document.getElementById("series");

    var elementAll = "";
    var elementMovies = "";
    var elementSeries = "";

    for (i in list) {
        elementAll += "<div class='content--grid-card' onclick='passId(" + list[i].id + ")'>" + '<img src="../' + list[i].imageSmall + '" alt="' + list[i].title + '" />' + "</div>";

        if (list[i].movie) {
            elementMovies += "<div class='content--grid-card' onclick='passId(" + list[i].id + ")'>" + '<img src="../' + list[i].imageSmall + '" alt="' + list[i].title + '" />' + "</div>";
        } else {
            elementSeries += "<div class='content--grid-card' onclick='passId(" + list[i].id + ")'>" + '<img src="../' + list[i].imageSmall + '" alt="' + list[i].title + '" />' + "</div>";
        }
    }

    if (divList) divList.innerHTML = elementAll;
    if (divMovies) divMovies.innerHTML = elementMovies;
    if (divSeries) divSeries.innerHTML = elementSeries;
}

function search(element) {
    var text = '';
    var filtered_movies = '';

    text = element.value.toLowerCase();

    filtered_movies = movies.filter(movie => {
        return movie.title.toLowerCase().indexOf(text) > -1 || movie.gender.toLowerCase().indexOf(text) > -1
    })

    show_list_search(filtered_movies);
}

show_list_search(movies);