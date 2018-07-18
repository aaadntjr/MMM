$(document).ready(function(){
    
    //스무스한 스크롤
//    $("html").easeScroll();    
    
    //PC버전 검색창 열기
    $(".pc_search img").click(function(){
        $(".pc_search input").stop().fadeToggle();
        return false;
    });
    
    //태블릿부터 gnb
    $(".mo_gnb").hide();
    $(".mo_gnb_btn").click(function(){
       $(".mo_gnb").stop().slideToggle();
        return false;
    });
    
    //부드러운 스크롤링
// Custom scrolling speed with jQuery
// Source: github.com/ByNathan/jQuery.scrollSpeed
// Version: 1.0.2

(function($) {
    
    jQuery.scrollSpeed = function(step, speed, easing) {
        
        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default',
            root = 0,
            scroll = false,
            scrollY,
            scrollX,
            view;
            
        if (window.navigator.msPointerEnabled)
        
            return false;
            
        $window.on('mousewheel DOMMouseScroll', function(e) {
            
            var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail;
                scrollY = $document.height() > $window.height();
                scrollX = $document.width() > $window.width();
                scroll = true;
            
            if (scrollY) {
                
                view = $window.height();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.height() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollTop: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            if (scrollX) {
                
                view = $window.width();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.width() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollLeft: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            return false;
            
        }).on('scroll', function() {
            
            if (scrollY && !scroll) root = $window.scrollTop();
            if (scrollX && !scroll) root = $window.scrollLeft();
            
        }).on('resize', function() {
            
            if (scrollY && !scroll) view = $window.height();
            if (scrollX && !scroll) view = $window.width();
            
        });       
    };
    
    jQuery.easing.default = function (x,t,b,c,d) {
    
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
    
})(jQuery);
    // $fn.scrollSpeed(step, speed, easing);
    jQuery.scrollSpeed(200, 800);

    
    //탑버튼 
    $(document).scroll(function(){
        
        var tbt = $(document).scrollTop();
        
//        console.log(tbt);
        
        if(tbt >= 500) {
            $(".top_btn").fadeIn(300);
            return false;
            
        }else {
            $(".top_btn").fadeOut(300);
            
            return false;
        }
        return false;
    });
    
    $(".top_btn").click(function(){
        $("html").animate({scrollTop : 0},"normal");
        return false;
    });
    
    //슬라이드 카운트 위치
    var slide_left = $(".slide .title").offset().left;
    $(".slide_count").css({"left":slide_left+"px"});
    
    //모바일 슬라이드 버튼 위치
    var count_left = $(".slide_count").offset().left;
    var count_width = $(".slide_count").width();
    var slide_btn = count_left + count_width + 12;
    $(".mo_slide_btn").css({"left":slide_btn+"px"});
    
    
    //section02 높이
    var slide_height = $(".slide_section").height();
    $(".section02").css({"height":slide_height+"px"});
    
    //리사이즈 펑션
    $(window).resize(function(){
        
        var slide_left = $(".slide .title").offset().left;
        var count_left = $(".slide_count").offset().left;
        var count_width = $(".slide_count").width();
        var slide_btn = count_left + count_width + 12;
        
        var slide_height = $(".slide_section").height();
        
        $(".slide_count").css({"left":slide_left+"px"});
        $(".mo_slide_btn").css({"left":slide_btn+"px"});
        $(".section02").css({"height":slide_height+"px"});
        
	    return false;
        //스크롤
//        new scrollhide();
    });
    
   //슬라이드 쇼
    var now = 0;
    var count = 2;
    
    $(".slide_section").eq(now).siblings().hide();
    
    function slide () {
        $(".slide_section").eq(now).siblings().fadeOut();  
        $(".slide_section").eq(now).fadeIn();
        $(".slide_count a").eq(now).siblings().removeClass("slide_active");
        $(".slide_count a").eq(now).addClass("slide_active");
        
        return false;
    };
    
    setInterval(function(){
        now = now == count ? 0 : now +1;;
        return slide();
        return false;
    },2500);
    
    $(".next_btn").click(function(){
        now = now == count ? 0 : now +1;;
        return slide();
        return false;
    });
    
    $(".prev_btn").click(function () {

		now = now == 0 ? count : now -=1 ;
		return slide();
        return false;
	});
    
    $(".slide_count a").eq(0).click(function(){
        now = 0;
        return slide();
        return false; 
    });
    $(".slide_count a").eq(1).click(function(){
        now = 1;
        return slide();
        return false; 
    });
    $(".slide_count a").eq(2).click(function(){
        now = 2;
        return slide();
        return false; 
    });
    
    
    
    
});/*레디 펑션*/
