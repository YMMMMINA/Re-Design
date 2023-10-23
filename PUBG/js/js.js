
/* 이미지 슬라이드 */
$(document).ready(function(){
    $('.slider').slick({
       infinite: true ,      // 무한반복
      centerMode: false ,
       slidesToShow: 1,     // 보여지는 슬라이드 개수
       slidesToScroll: 1,   // 넘어가는 슬라이드 개수
       dots: true,         // 점 네비게이션 표시
       arrows: true ,     // 화살표 표시
       fade: false,            // 페이드 효과
       vertical: false,         // 상하 슬라이드
       autoplay: false,       //자동스크롤
       autoplaySpeed: 1000 ,  //자동스크롤 속도
      pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
      // responsive: 
      // [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //       infinite: true,
      //       dots: true
      //     }
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1
      //     }
      //   }
      // ]
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

/* 메뉴 fixed */
$(window).scroll(function(){ 
  var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
  if(height > 800 ){ 
    $('.top-bar-wrap').addClass('fixed'); 
  }else if(height < 200){ 
    $('.top-bar-wrap').removeClass('fixed'); 
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

/* 적용안됨. 
$(window).scroll(function(){
    
  var test = $(this).scrollTop();
  
  console.log(test)
  
  if( 1000 > test > 3000 ){
    $(".sns-fixed").css({
      "background-color" : "#000"
    });
  }
});
/* 스크롤 top-btn 끝 */

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

/* 스크롤 top-btn 끝 */

/* 스크롤 매직 적용이 안됨..
// init controller
var controller = new ScrollMagic.Controller();

// build scenes
var revealElements = document.getElementsByClassName("digit");
for (var i=0; i<revealElements.length; i++) { // create a scene for each element
  new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
            offset: 100,												 // start a little later
            triggerHook: 0.9,
          })
          .setClassToggle(revealElements[i], "visible") // add class toggle
          .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
          .addTo(controller);
}*/