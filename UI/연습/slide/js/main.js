$(document).ready(function() {

    /*
        1. 스크롤을 내렸을 때, 각 섹션에 해당되는
        .gnb li의 스타일 바꾸기.
    */
    var themeList=["spring","summer","fall","winter"];
    var sectionOffset = Array();
    var scr = $(window).scrollTop();


    function measure() {
        for(i=0; i<4; i++){
           sectionOffset[i] = $("section").eq(i).offset().top;
        }
    }

    function setTheme() {
        $(".gnb li").removeClass();
        for(i=0; i<4; i++){
            if(scr >= sectionOffset[i] && scr < sectionOffset[i+1]){
                $(".gnb li").eq(i).addClass(themeList[i]);
            } else if(scr >= sectionOffset[3]){
                $(".gnb li").eq(3).addClass(themeList[3]);
            }
        }
    }
    
    measure();
    setTheme();

    $(window).on("scroll", function() {
        scr = $(this).scrollTop();
        setTheme();
    });

    $(window).on("resize", function() {
        scr = $(this).scrollTop();
        measure();
        setTheme();
    })

    $("section").on("scroll",function(e){
        var scr = $(this).scrollTop();
        console.log(e);
    })


});//opening