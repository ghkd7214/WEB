$(".menu li").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
});

$(".menu li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp();
});

var cnt =0;
start();
function start(){
    $(".imgs img").eq(0).siblings().css("margin-top","-2000px");
    setInterval(function(){slide();},"2000")
    //setInterval(함수(){기능();},"초")
};

function slide(){
    cnt++;
    if (cnt ==5){
        cnt =0;
    }
    $(".imgs img").eq(cnt).siblings().css("margin-top","-2000px")
    $(".imgs img").eq(cnt).css("margin-top","0px")
}
