$(document).ready(function () {
    $('.slick-bigger').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slick-smaller'
    });
    $('.slick-smaller').slick({
        centerMode: true,
        centerPadding: '90px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ],
        asNavFor: '.slick-bigger'
    });


        $(".service_menu_list").click(function () {
            let activeTabId = $(this).attr("data-id");
            $(".service_menu_list").removeClass("active");
            $(".service_description_div").removeClass("desc_active");

            $(this).addClass("active");
            $("#des_tab_"+activeTabId).addClass("desc_active");
        });
});


