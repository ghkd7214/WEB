$(".menu>li").mouseover(function(){
    $(".sub").stop().slideDown();
});

$(".sub").mouseleave(function(){
    $(".sub").stop().slideUp();
});
