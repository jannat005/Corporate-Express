$(document).ready(function(){
$('.dropdown-item').mouseover(function(){
            $(this).stop().animate({
                'width': '300px'
            },1000);
        });
        $('.dropdown-item').mouseout(function(){
            $(this).stop().animate({
                'width': '250px'
            },1000);
        });
		
		});
	