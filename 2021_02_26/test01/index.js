$(".menu li").mouseover(function(){
	$(this).children(".submenu").stop().slideDown();
});

$(".menu li").mouseleave(function(){
	$(this).children(".submenu").stop().slideUp();
});

var cnt =0;
start();
function start(){
    $(".imgs img").eq(0).siblings().css("margin-left","-2000px")
    setInterval(function(){slide()},2000);     //2초
}
function slide(){
    cnt++;
    if(cnt==5){
        cnt=0
    }
    $(".imgs img").eq(cnt).siblings().css("margin-left","-2000px")
    $(".imgs img").eq(cnt).css("margin-left","0px")
}

var dispmenu=false;

$(".gnb_menu").click(function(){
    if(dispmenu==false){
        $("nav").css("display","block")        
        dispmenu=true;
    }else{
        $("nav").css("display","none")
        dispmenu=false;
    }
})