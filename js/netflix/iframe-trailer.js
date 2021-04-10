'use strict'

const modal = document.getElementsByClassName('modal');
var i = localStorage.getItem('id_detail');
var movie;

movies.forEach(item => { 
  if (item.id === +i) 
  movie = item;
})


function openModal() {
  modal[0].classList.toggle('modal--open');

  var iframe = document.getElementById('iframe');
  iframe.innerHTML = "<iframe src='" + movie.urlTrailer + "' frameborder='0' allow='autoplay' allowfullscreen></iframe> <div onclick='closeModal()' class='modal--close'>&times;</div>"
}

function closeModal() {
  modal[0].classList.toggle('modal--open');
  iframe.innerHTML = " "
}