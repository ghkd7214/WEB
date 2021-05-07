$(".mainbar li").mouseover(function(){
    $(this).children(".sub").stop().slideDown(1);
})

$(".mainbar li").mouseleave(function(){
    $(this).children(".sub").stop().slideUp(1);
})