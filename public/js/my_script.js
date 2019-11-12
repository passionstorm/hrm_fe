$(document).ready(function(){
    $('a.pill').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
});