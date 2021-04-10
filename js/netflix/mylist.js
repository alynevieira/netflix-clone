'use strict'

function addList(x) {
  if (x.classList[0] === "add-list") {
    x.classList.replace("add-list", "remove-list");

    var id = localStorage.getItem('id_detail');

    var movies = JSON.parse(localStorage["mylist"] || "[]");
    movies.push(id);
    localStorage["mylist"] = JSON.stringify(movies);
  } else {
    x.classList.replace("remove-list", "add-list");
    var id = localStorage.getItem('id_detail');

    var movies = JSON.parse(localStorage["mylist"] || "[]");
    console.log(id)
    movies.forEach((data, i) => {
      if (data === id) {
        movies.splice(i, 1);
      }
    })
    localStorage["mylist"] = JSON.stringify(movies);
  }
}

function removeMyList(id) {
  var idList = JSON.parse(localStorage["mylist"] || "[]");

  idList.forEach((data, i) => {
    if (data === String(id)) {
      idList.splice(i, 1);
    }
  })

  localStorage["mylist"] = JSON.stringify(idList);

  location.reload();
}

function populateMyList() {
  var listEmpty = document.getElementsByClassName("list-empty");
  var list = document.getElementById("myList");
  var ids = JSON.parse(localStorage["mylist"] || "[]");

  movies.forEach(item => {
    ids.forEach(id => {
      if (item.id === +id) {

        if (listEmpty[0] && list) {
          listEmpty[0].style['opacity'] = 0;
          listEmpty[0].style['height'] = 0;

          let row = list.insertRow();
          row.className = "table--item";
          let image = row.insertCell(0);
          image.setAttribute("onclick", "passId(" + item.id + ")");
          image.style.position = "relative";
          image.innerHTML = "<img src='../" + item.imageSmall + "' class='table--image' alt='" + item.title + "' /> <div class='table--content-image'></div>";
          let title = row.insertCell(1);
          title.className = "table--title";
          title.innerHTML = item.title;
          let rating = row.insertCell(2);
          rating.innerHTML = "<div class='table--rating'><div class='table--rating-front' style='width: " + item.rating + "%'><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><div class='table--rating-back'><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div></div>"
          let year = row.insertCell(3);
          year.className = "table--year";
          year.innerHTML = item.year;
          let duration = row.insertCell(4);
          duration.innerHTML = item.duration;
          let remove = row.insertCell(5);
          remove.className = "table--remove";
          remove.innerHTML = "<button class='table--remove-item' onclick='removeMyList(" + item.id + ")'> &times; </button>"
        }
      }
    })
  })
}

populateMyList();