$(".menu li").mouseover(function(){
    $(this).children(".sub").stop().slideDown()
})

$(".menu li").mouseleave(function(){
    $(this).children(".sub").stop().slideUp()
})

$(".dot a").click(function(){
    var aaa = $(this).attr("imgLeft")
    $(".imgs").animate({left:aaa},"fast")
})