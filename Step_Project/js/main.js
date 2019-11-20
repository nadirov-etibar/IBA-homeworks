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

    $(".work_menu_list").click(function () {
        $(".work_menu_list").removeClass("active_work");
        $(this).addClass("active_work");
        if ($(this).text() === "Graphic Design"){
            $(".image").remove();
            for (let i = 0; i < 12; i++){
                let image = "<div class=\"image\">\n" +
                    "                    <img src=\"img/graphic_design/graphic-design"+(i+1)+".jpg\" alt=\"\" width='285' height='209'>\n" +
                    "                    <div class=\"description\">\n" +
                    "                        <div class=\"description_icons\">\n" +
                    "                            <i class=\"fas fa-link\"></i>\n" +
                    "                            <i class=\"fas fa-search\"></i>\n" +
                    "                        </div>\n" +
                    "                        <h2 class=\"description_header color_green\">creative design</h2>\n" +
                    "                        <p class=\"description_tab\">graphic design</p>\n" +
                    "                    </div>\n" +
                    "                </div>";
                $(".row").append(image);
            }
        }

        else if ($(this).text() === "Web Design"){
            $(".image").remove();
            for (let i = 0; i < 7; i++){
                let image = "<div class=\"image\">\n" +
                    "                    <img src=\"img/web_design/web-design"+(i+1)+".jpg\" alt=\"\" width='285' height='209'>\n" +
                    "                    <div class=\"description\">\n" +
                    "                        <div class=\"description_icons\">\n" +
                    "                            <i class=\"fas fa-link\"></i>\n" +
                    "                            <i class=\"fas fa-search\"></i>\n" +
                    "                        </div>\n" +
                    "                        <h2 class=\"description_header color_green\">creative design</h2>\n" +
                    "                        <p class=\"description_tab\">web design</p>\n" +
                    "                    </div>\n" +
                    "                </div>";
                $(".row").append(image);
            }
        }

        else if ($(this).text() === "Landing pages"){
            $(".image").remove();
            for (let i = 0; i < 7; i++){
                let image = "<div class=\"image\">\n" +
                    "                    <img src=\"img/landing_page/landing-page"+(i+1)+".jpg\" alt=\"\" width='285' height='209'>\n" +
                    "                    <div class=\"description\">\n" +
                    "                        <div class=\"description_icons\">\n" +
                    "                            <i class=\"fas fa-link\"></i>\n" +
                    "                            <i class=\"fas fa-search\"></i>\n" +
                    "                        </div>\n" +
                    "                        <h2 class=\"description_header color_green\">creative design</h2>\n" +
                    "                        <p class=\"description_tab\">landing page</p>\n" +
                    "                    </div>\n" +
                    "                </div>";
                $(".row").append(image);
            }
        }

        else if ($(this).text() === "wordpress"){
            $(".image").remove();
            for (let i = 0; i < 10; i++){
                let image = "<div class=\"image\">\n" +
                    "                    <img src=\"img/wordpress/wordpress"+(i+1)+".jpg\" alt=\"\" width='285' height='209'>\n" +
                    "                    <div class=\"description\">\n" +
                    "                        <div class=\"description_icons\">\n" +
                    "                            <i class=\"fas fa-link\"></i>\n" +
                    "                            <i class=\"fas fa-search\"></i>\n" +
                    "                        </div>\n" +
                    "                        <h2 class=\"description_header color_green\">creative design</h2>\n" +
                    "                        <p class=\"description_tab\">wordpress</p>\n" +
                    "                    </div>\n" +
                    "                </div>";
                $(".row").append(image);
            }
        }

        else if ($(this).text() === "All"){
            $(".image").remove();
            for (let i = 0; i < 11; i++){
                let image = "<div class=\"image\">\n" +
                    "                    <img src=\"img/all/Layer"+(i+1)+".png\" alt=\"\" width='285' height='209'>\n" +
                    "                    <div class=\"description\">\n" +
                    "                        <div class=\"description_icons\">\n" +
                    "                            <i class=\"fas fa-link\"></i>\n" +
                    "                            <i class=\"fas fa-search\"></i>\n" +
                    "                        </div>\n" +
                    "                        <h2 class=\"description_header color_green\">creative design</h2>\n" +
                    "                        <p class=\"description_tab\">wordpress</p>\n" +
                    "                    </div>\n" +
                    "                </div>";
                $(".row").append(image);
            }
        }
    });

    let count = 12;
    $(".btn_div").click(function () {
        count +=12;
        if (count == 24){
            for (let i = 0; i < 12; i++){
                let image = "<div class=\"image\">\n" +
                    "                    <img src=\"img/graphic_design/graphic-design"+(i+1)+".jpg\" alt=\"\" width='285' height='209'>\n" +
                    "                    <div class=\"description\">\n" +
                    "                        <div class=\"description_icons\">\n" +
                    "                            <i class=\"fas fa-link\"></i>\n" +
                    "                            <i class=\"fas fa-search\"></i>\n" +
                    "                        </div>\n" +
                    "                        <h2 class=\"description_header color_green\">creative design</h2>\n" +
                    "                        <p class=\"description_tab\">graphic design</p>\n" +
                    "                    </div>\n" +
                    "                </div>";
                $(".row").append(image);
            }
        }

        else if (count == 36){
            for (let i = 0; i < 11; i++){
                let image = "<div class=\"image\">\n" +
                    "                    <img src=\"img/all/Layer"+(i+1)+".png\" alt=\"\" width='285' height='209'>\n" +
                    "                    <div class=\"description\">\n" +
                    "                        <div class=\"description_icons\">\n" +
                    "                            <i class=\"fas fa-link\"></i>\n" +
                    "                            <i class=\"fas fa-search\"></i>\n" +
                    "                        </div>\n" +
                    "                        <h2 class=\"description_header color_green\">creative design</h2>\n" +
                    "                        <p class=\"description_tab\">wordpress</p>\n" +
                    "                    </div>\n" +
                    "                </div>";
                $(".row").append(image);
            }

            $(".btn_div").css({display: "none"});
        }
    });
});


