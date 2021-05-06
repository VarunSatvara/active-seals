$(document).ready(function() {
    $(".nav-tabs a").click(function() {
        $(this).tab('show');
    });
    $(".nav_btn").click(function() {
        $("body").toggleClass("intro");
    });
});