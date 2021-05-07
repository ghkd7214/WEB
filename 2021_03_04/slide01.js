$(".btn_dot a").click(function(){
    var aaa=$(this).attr("imgLeft")
    $(".imgs").animate({left:aaa},"fast")           //animate({속성:값},"빠르기")
})