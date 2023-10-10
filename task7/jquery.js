$(document).ready(function(){
    $('.slider').slick({
        arrows:true, 
        dots:true, 
        slidesToShow:3, 
        slidesToScroll:1,
        responsive:[
            {
                breakpoint: 800,
                settings: {
                    slidesToShow:1
                }
            }
            ]
       
    })
})