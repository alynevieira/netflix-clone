'use strict'

function showList() {
    localStorage.setItem("id_detail", 13);

    var landingButton = document.getElementById("button--infomation");
    var landingTitle = document.getElementById("landing--title");
    var landingSubtitle = document.getElementById("landing--subtitle");
  
    var array1 = [1, 2, 3, 4, 5, 6, 9];
    var array2 = [7, 8, 10, 11, 13, 20, 21];
    var array3 = [12, 14, 15, 16, 17, 18, 19];
    
    var trendNow = [], playAgain = [], seeMovies = [];
    
    landingButton.setAttribute("onclick", "passId(13)");
    
    movies.forEach(item => {
  
      if(item.id === 13) {
        landingTitle.innerHTML = item.title;
        landingSubtitle.innerHTML = item.description;
      }
  
      array1.forEach(i => {
        if (i === item.id) { 
          trendNow.push(item)
        }
      });
  
      array2.forEach(i => {
        if (i === item.id) { 
          playAgain.push(item)
        }
      });
  
      array3.forEach(i => {
        if (i === item.id) { 
          seeMovies.push(item)
        }
      });
    });
  
    trendNow.forEach(item => {
      let element = "<div class='item grow' onclick='passId(" + item.id + ")'>" +
      "<div class='content-overlay'></div>" + 
      "<img src='"+ item.imageSmall +"' alt='" + item.title + "' />" + 
      "<div class='item-content'>" + 
      "<h4 class='item-content--title'>" + item.title + "</h4>" +
      "<p class='item-content--text'>"+
      "<span>" + item.rating + "% relevante </span> &nbsp; | &nbsp;" + item.year + "&nbsp;  |  &nbsp; " + item.gender + "</p>" +
      "</div> </div>"
  
      $('#trendNow').owlCarousel('add', element).owlCarousel('update');
    })
  
    playAgain.forEach(item => {
      let element = "<div class='item grow' onclick='passId(" + item.id + ")'>" +
      "<div class='content-overlay'></div>" + 
      "<img src='"+ item.imageSmall +"' alt='" + item.title + "' />" + 
      "<div class='item-content'>" + 
      "<h4 class='item-content--title'>" + item.title + "</h4>" +
      "<p class='item-content--text'>"+
      "<span>" + item.rating + "% relevante </span> &nbsp; | &nbsp;" + item.year + "&nbsp;  |  &nbsp; " + item.gender + "</p>" +
      "</div> </div>"
  
      $('#playAgain').owlCarousel('add', element).owlCarousel('update');
    })
  
    seeMovies.forEach(item => {
      let element = "<div class='item grow' onclick='passId(" + item.id + ")'>" +
      "<div class='content-overlay'></div>" + 
      "<img src='"+ item.imageSmall +"' alt='" + item.title + "' />" + 
      "<div class='item-content'>" + 
      "<h4 class='item-content--title'>" + item.title + "</h4>" +
      "<p class='item-content--text'>"+
      "<span>" + item.rating + "% relevante </span> &nbsp; | &nbsp;" + item.year + "&nbsp;  |  &nbsp; " + item.gender + "</p>" +
      "</div> </div>"
  
      $('#seeMovies').owlCarousel('add', element).owlCarousel('update');
    })
  
  }

  showList();