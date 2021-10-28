$(document).ready(function () {

    $(".top-bar > .left-menu > ul > li").mouseover(function () {
        $(".top-bar > .left-menu > ul > li > ul").stop().slideDown(200);
    });
    
    $(".top-bar > .left-menu > ul > li").mouseout(function () {
        $(".top-bar > .left-menu > ul > li > ul").stop().slideUp(200);
    });
});
    
$(document).ready(function () {

    $(".top-bar > .left-menu > ul > li").mouseover(function () {
        $(".main-wrap > .menu-slide-bg").stop().slideDown(200);
    });
    
    $(".top-bar > .left-menu > ul > li").mouseout(function () {
        $(".main-wrap > .menu-slide-bg").stop().slideUp(200);
    });
});