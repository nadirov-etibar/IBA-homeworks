$(document).ready(function () {
    $('.menu_links').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
        return false;
    });

    $('.btn-up').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $(window).scroll(function() {
        if($(this).scrollTop() < 474) {
            $(".btn-up").addClass("up")
        }
        else {
            $(".btn-up").removeClass("up")
        }
    });

    $(".slideToggle").text("-");
    let add = false;
    $.myFunction = function () {
        if (add == false){
            $(".slideToggle").text("+");
            $(".popular_post_div").css({display: "none"});
            add = true;
        }
        else if (add == true){
            $(".slideToggle").text("-");
            $(".popular_post_div").css({display: "block"});
            add = false;
        }
    };


});

function slideToggle() {
    $.myFunction();
}