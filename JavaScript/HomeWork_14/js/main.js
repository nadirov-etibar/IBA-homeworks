$(document).ready(function () {
   $(".tabs-title").click(function () {
      let activeTabId = $(this).attr("data-id");
      $(".tabs-title").removeClass("active");
      $(".content").removeClass("content-active");

      $(this).addClass("active");
      $("#active_tab_"+activeTabId).addClass("content-active");
   });
});