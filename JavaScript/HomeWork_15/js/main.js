$(document).ready(function () {
    $('.menu_links').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
    });

    $('.btn-up').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function() {
        if($(this).scrollTop() < 474) {
            $(".btn-up").addClass("up")
        }
        else {
            $(".btn-up").removeClass("up")
        }
    });

    let add = false;
    $(".slideToggle").text("-").css({fontSize: "30px"});
    $(".slideToggle").click(function () {
        if (add == false){
            $(".slideToggle").text("+").css({fontSize: "30px"});
            add = true;
        }

        else {
            $(".slideToggle").text("-").css({fontSize: "30px"});
            add = false;
        }
        $(".popular_post_div").slideToggle();
    })


});