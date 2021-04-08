'use strict'

var movies = [
  {
    id: 1,
    movie: false,
    title: "La Casa de Papel",
    description: "Um grupo de oito pessoas, liderados por um Professor, prepara o roubo do século na Casa da Moeda da Espanha, com o objetivo de fabricar o próprio dinheiro em quantidades incalculáveis e nunca antes vista.",
    imageSmall: "../../img/netflix/lacasadepapel.jpg",
    imageLarge: "../../img/netflix/large/lacasadepapel.jpg",
    rating: "96",
    year: "2017",
    gender: "Drama"
  },
  {
    id: 2,
    movie: false,
    title: "Brooklyn Nine-Nine",
    description: "Jake Peralta é um detetive brilhante e ao mesmo tempo imaturo, que nunca precisou se preocupar em respeitar as regras. Tudo muda quando um capitão exigente assume o comando de seu esquadrão e Jake deve aprender a trabalhar em equipe.",
    imageSmall: "../../img/netflix/b99.jpg",
    imageLarge: "../../img/netflix/large/b99.jpg",
    rating: "95",
    year: "2013",
    gender: "Sitcom"
  },
  {
    id: 3,
    movie: false,
    title: "Breaking Bad",
    description: "O professor de química Walter White não acredita que sua vida possa piorar ainda mais. Quando descobre que tem câncer terminal, Walter decide arriscar tudo para ganhar dinheiro enquanto pode, transformando sua van em um laboratório de metanfetamina.",
    imageSmall: "../../img/netflix/breaking-bad.jpg",
    imageLarge: "../../img/netflix/large/breakingbad.jpg",
    rating: "96",
    year: "2008",
    gender: "Crime"
  },
  {
    id: 4,
    movie: false,
    title: "Lucifer",
    description: "Lucifer está entediado e infeliz como o Senhor do Inferno e decide tirar férias em Los Angeles, onde vira dono de uma casa noturna com ajuda de sua serva Mazikeen.",
    imageSmall: "../../img/netflix/lucifer.jpg",
    imageLarge: "../../img/netflix/large/lucifer.jpg",
    rating: "96",
    year: "2016",
    gender: "Mistério"
  },
  {
    id: 5,
    movie: false,
    title: "13 Reasons Why",
    description: "Clay Jensen é um estudante que se vê envolvido em uma série de mistérios provocados pelo trágico suicídio de uma amiga.",
    imageSmall: "../../img/netflix/13reasons.jpg",
    imageLarge: "../../img/netflix/large/13reasons.jpg",
    rating: "92",
    year: "2017",
    gender: "Drama"
  },
  {
    id: 6,
    movie: false,
    title: "Black Mirror",
    description: "Contos de ficção científica que refletem o lado negro das telas e da tecnologia, mostrando que nem toda novidade traz só benefícios.",
    imageSmall: "../../img/netflix/black-mirror.jpg",
    imageLarge: "../../img/netflix/large/blackmirror.jpg",
    rating: "91",
    year: "2011",
    gender: "Ficção cientifica"
  },
  {
    id: 7,
    movie: false,
    title: "Naruto",
    description: "Naruto Shippuden ocorre 2 anos e meio após Naruto ter ficado para treinar com Jiraiya. Com apenas 6 meses para resgatar Sasuke, Naruto tem de enfrentar inimigos ainda mais perigosos.",
    imageSmall: "../../img/netflix/naruto.jpg",
    imageLarge: "../../img/netflix/large/naruto.jpg",
    rating: "90",
    year: "2007",
    gender: "Anime"
  },
  {
    id: 8,
    movie: false,
    title: "One piece",
    description: "Luffy é um pirata que está atrás de um conhecido tesouro One Piece, deixado pelo lendário Rei dos Piratas, Gold Roger, que o anunciou antes de sua execução.",
    imageSmall: "../../img/netflix/onepiece.jpg",
    imageLarge: "../../img/netflix/large/onepiece.jpg",
    rating: "90",
    year: "1999",
    gender: "Anime"
  },
  {
    id: 9,
    movie: false,
    title: "Rick and Morty",
    description: "Acompanhe malucas viagens no tempo-espaço e por universos paralelos com Rick, um cientista com problemas com a bebida, e seu neto Morty, um adolescente não tão brilhante quanto o avô.",
    imageSmall: "../../img/netflix/rickandmorty.jpg",
    imageLarge: "../../img/netflix/large/rickandmorty.jpg",
    rating: "96",
    year: "2013",
    gender: "Sitcom"
  },
  {
    id: 10,
    movie: true,
    title: "O jogo da imitação",
    description: "Em 1939, a recém-criada agência de inteligência britânica MI6 recruta Alan Turing, um aluno da Universidade de Cambridge, para entender códigos nazistas, incluindo o Enigma, que criptógrafos acreditavam ser inquebrável. A equipe de Turing, incluindo Joan Clarke, analisa as mensagens de Enigma, enquanto ele constrói uma máquina para decifrá-las.",
    imageSmall: "../../img/netflix/ojogodaimitacao.jpg",
    imageLarge: "../../img/netflix/large/jogodaimitacao.jpg",
    rating: "93",
    year: "2015",
    gender: "Drama"
  },
  {
    id: 11,
    movie: true,
    title: "Shrek 2",
    description: "Após se casar com a Princesa Fiona, Shrek vive feliz em seu pântano. Mas ao voltar a lua de mel, Fiona recebe uma carta de seus pais a convidando para um jantar e acompanhado do burro, vão para Tão Tâo distante.",
    imageSmall: "../../img/netflix/shrek.jpg",
    imageLarge: "../../img/netflix/large/shrek.jpg",
    rating: "90",
    year: "2004",
    gender: "Comedia"
  },
  {
    id: 12,
    movie: true,
    title: "Resgate",
    description: "Em Bangladesh, o mercenário do mercado negro Tyler Rake luta para sobreviver durante a missão para resgatar o filho sequestrado de um chefe do crime internacional.",
    imageSmall: "../../img/netflix/resgate.jpg",
    imageLarge: "../../img/netflix/large/resgate.jpg",
    rating: "90",
    year: "2020",
    gender: "Ação"
  },
  {
    id: 13,
    movie: false,
    title: "The Witcher",
    description: "O mutante Geralt de Rívia é um caçador de monstros que luta para encontrar seu lugar em um mundo onde as pessoas, muitas vezes, são mais perversas do que as criaturas selvagens.",
    imageSmall: "../../img/netflix/thewitcher.jpg",
    imageLarge: "../../img/netflix/large/thewitcher.jpg",
    rating: "94",
    year: "2019",
    gender: "Fantasia"
  },
  {
    id: 14,
    movie: true,
    title: "Sniper Americano",
    description: "História real de Chris Kyle, atirador de elite das forças especiais da marinha dos Estados Unidos. Seu dever fez dele um dos maiores atiradores da história americana. Sua precisão salva inúmeras vidas, mas também o torna um alvo preferencial. Quando Kyle finalmente volta para casa, ele descobre que não tem como deixar a guerra para trás.",
    imageSmall: "../../img/netflix/sniperamericano.jpg",
    imageLarge: "../../img/netflix/large/sniper.jpg",
    rating: "91",
    year: "2014",
    gender: "Guerra"
  },
  {
    id: 15,
    movie: true,
    title: "Guerra Mundial Z",
    description: "Um vírus letal se espalha rapidamente e transforma seres humanos em zumbis. O ex-agente da ONU Gerry Lane é chamado para investigar a epidemia que está acabando com a humanidade, iniciando uma verdadeira corrida contra o tempo.",
    imageSmall: "../../img/netflix/guerramundialz.jpg",
    imageLarge: "../../img/netflix/large/guerramundial.jpg",
    rating: "91",
    year: "2013",
    gender: "Terror"
  },
  {
    id: 16,
    movie: true,
    title: "Fragmentado",
    description: "Kevin possui 23 personalidades distintas e consegue alterná-las quimicamente em seu organismo apenas com a força do pensamento. Um dia, ele sequestra três adolescentes que encontra em um estacionamento. Vivendo em cativeiro, elas passam a conhecer as diferentes facetas de Kevin e precisam encontrar algum meio de escapar.",
    imageSmall: "../../img/netflix/fragmentado.jpg",
    rating: "89",
    year: "2017",
    gender: "Terror"
  },
  {
    id: 17,
    movie: true,
    title: "Karate Kid",
    description: "Um garoto de 12 anos chamado Dre Parker se muda para a China com a mãe e se vê em um terra estranha. Ele sabe um pouco de caratê, mas suas habilidades não são o bastante para enfrentar o valentão da escola, Cheng. Dre faz amizade com o Sr. Han, um mestre das artes marciais, que lhe ensina os segredos do kung fu.",
    imageSmall: "../../img/netflix/karatekid.jpg",
    imageLarge: "../../img/netflix/large/karatekid.jpg",
    rating: "91",
    year: "2010",
    gender: "Drama"
  },
  {
    id: 18,
    movie: true,
    title: "Liga da justiça",
    description: "Impulsionado pela restauração de sua fé na humanidade e inspirado pelo ato altruísta do Superman, Bruce Wayne convoca sua nova aliada Diana Prince para o combate contra um inimigo ainda maior, recém-despertado. Juntos, Batman e Mulher-Maravilha buscam e recrutam com agilidade um time de meta-humanos.",
    imageSmall: "../../img/netflix/ligadajustica.jpg",
    imageLarge: "../../img/netflix/large/ligadajustica.jpg",
    rating: "95",
    year: "2021",
    gender: "Aventura"
  },
  {
    id: 19,
    movie: true,
    title: "Vingadores: Ultimato",
    description: "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.",
    imageSmall: "../../img/netflix/vingadores.jpg",
    imageLarge: "../../img/netflix/large/vingadores.png",
    rating: "95",
    year: "2019",
    gender: "Ação"
  },
  {
    id: 20,
    movie: false,
    title: "InuYasha",
    description: "InuYasha é um meio-youkai que foi lacrado em uma árvore pela sacerdotisa Kikyou, a mulher que amava. Porém, quando Kagome (reencarnação da sacerdotisa Kikyou), uma colegial da era presente, volta no tempo, faz com que InuYasha volte à vida desfazendo o lacre.",
    imageSmall: "../../img/netflix/inuyasha.jpg",
    imageLarge: "../../img/netflix/large/inuyasha.jpg",
    rating: "95",
    year: "1996",
    gender: "Anime"
  },
];

var id_detail;

var show_list_search = function (list) {
  var divList = document.getElementById("list");
  var divMovies = document.getElementById("movies");
  var divSeries = document.getElementById("series");

  var elementAll = "";
  var elementMovies = "";
  var elementSeries = "";

  for (i in list) {
    elementAll += "<div class='content--grid-card' onclick='passId(" + list[i].id + ")'>" + '<img src="' + list[i].imageSmall + '" alt="' + list[i].title + '" />' + "</div>";

    if (list[i].movie) {
      elementMovies += "<div class='content--grid-card' onclick='passId(" + list[i].id + ")'>" + '<img src="' + list[i].imageSmall + '" alt="' + list[i].title + '" />' + "</div>";
    } else {
      elementSeries += "<div class='content--grid-card' onclick='passId(" + list[i].id + ")'>" + '<img src="' + list[i].imageSmall + '" alt="' + list[i].title + '" />' + "</div>";
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
    movie = movie.title.toLowerCase();

    return movie.indexOf(text) > -1
  })

  show_list_search(filtered_movies);
}

function passId(id) {
  localStorage.setItem("id_detail", id);

  window.location.href = "detail.html";
}

function showDetails() {
  var image = document.getElementById("image");
  var title = document.getElementById("title");
  var subtitle = document.getElementById("subtitle");
  var text = document.getElementById("text");

  var details;
  var id = localStorage.getItem('id_detail');

  details = movies.find(item => {
    if (item.id === +id)
      return item
  });

  if (image && title && subtitle && text) {
    image.style.background = " linear-gradient(90deg, rgb(0 0 0 / 88%) 20%, transparent 80%), url(" + details.imageLarge + ") 0 0 no-repeat fixed";
    title.innerHTML = details.title;
    subtitle.innerHTML = "<span>" + details.rating + "% relevante</span> &nbsp; | &nbsp;" + details.year + "&nbsp;  |  &nbsp; " + details.gender;
    text.innerHTML = details.description;
  }
}

function showList() {
  var carousel1 = document.getElementById('trendNow');
  var carousel2 = document.getElementById('playAgain');
  var carousel3 = document.getElementById('seeMovies');

  var array1 = [1, 2, 3, 4, 5, 6, 9];
  var array2 = [7, 8, 10, 11, 13, 20];
  var array3 = [12, 14, 15, 16, 17, 18, 19];

  var trendNow = [], playAgain = [], seeMovies = [];

  movies.forEach(item => { 
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
    "<span>" + item.rating + " relevante </span> &nbsp; | &nbsp;" + item.year + "&nbsp;  |  &nbsp; " + item.gender + "</p>" +
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
    "<span>" + item.rating + " relevante </span> &nbsp; | &nbsp;" + item.year + "&nbsp;  |  &nbsp; " + item.gender + "</p>" +
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
    "<span>" + item.rating + " relevante </span> &nbsp; | &nbsp;" + item.year + "&nbsp;  |  &nbsp; " + item.gender + "</p>" +
    "</div> </div>"

    $('#seeMovies').owlCarousel('add', element).owlCarousel('update');
  })

}

show_list_search(movies);
showDetails();
showList();


