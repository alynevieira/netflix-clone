$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav: false,
    dots: false,
    startPosition: 0,
    responsive:{
        0:{
            items:1,
            loop: false
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})