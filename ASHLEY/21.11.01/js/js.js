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

/* 스크롤 btn */
$(window).scroll(function(){
    
    var test = $(this).scrollTop();
    
    console.log(test)
    
    if( test <= 3500){
      $(".sns-fixed").addClass("active");
    } else if( test >=100 ){
      $(".sns-fixed").removeClass("active");
    }
    
  });

 /* 우측 sns 중간에 색상 변경   X   */
$(window).scroll(function(){ 
    var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
    if( 3000 > height > 1000 ){ 
      $('.top-bar-wrap').addClass('scroll_ac'); 
    }else if(height < 200){ 
      $('.top-bar-wrap').removeClass('scroll_ac'); 
    } 
  });

  /* 메뉴 fixed */
$(window).scroll(function(){ 
    var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
    if(height > 800 ){ 
      $('.main-wrap > .top-bar').addClass('fixed'); 
    }else if(height < 200){ 
      $('.main-wrap > .top-bar').removeClass('fixed'); 
    } 
  });

  /* 스크롤 btn 클릭시 맨위로 */
  $(document).ready(function(){
	
    $(".top-btn").click(function(){
      $("html , body").animate({
        scrollTop : "0" ,
      }  , 1000);
    });
  });

  /* top-btn 나타나고 사라지는 */  
  $(window).scroll(function(){
    
    var test = $(this).scrollTop();
    
    console.log(test)
    
    if( test >= 1200){
      $(".top-btn").addClass("active");
    } else if( test <=100 ){
      $(".top-btn").removeClass("active");
    }
    
  });

  /* top-btn 색상변경 */
  $(window).scroll(function(){
    
    var test = $(this).scrollTop();
    
    console.log(test)
    
    if( test >= 2800){
      $(".top-btn").css({
        "color" : "#fff"
      })
    } else if( test <=2700 ){
      $(".top-btn").css({
        "color" : "#000"
      });
    }
  });