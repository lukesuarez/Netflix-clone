//carrosel 

$('.owl-carousel').owlCarousel({
    loop:true,
    //loop:false,
    margin:12,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

