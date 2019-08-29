$(document).ready(function () {
    $('#slides').superslides({
        'play': 5000
    });
    $('.slider').cycle( {
        fx: 'all',
        speed: 1000,
        timeout: 1000,
        next: '.next',
        prev: '.prev',
        pager: '.pager',
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });

});
