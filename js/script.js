$(document).ready(function(){
    $('#play').click(function(){
        $('#slider').cycle('resume');
    });
    $('#pause').click(function(){
        $('#slider').cycle('pause');
    });
    $('#slider').cycle({
        fx : 'all',
        speed: 800,
        timeout: 1000,
        next : '#next',
        prev : '#prev',
       
    });
});