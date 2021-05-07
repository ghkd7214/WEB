var sp =screen.width/2-350;
var imgs = 4;
var now = 0;
var play;
var mode=true;  //true면 자동슬라이드 false면 슬라이드멈춤 
var prevIndex;


start();

$(".btn_play").click(function(){
    clearInterval(play)
    $(this).css("display","none")
    $(".btn_stop").css("display","block")
    mode=false;
})

$(".btn_stop").click(function(){
    play=setInterval(function(){slide();},2000)
    $(this).css("display","none")
    $(".btn_play").css("display","block")
    mode=true;
})


function start(){
    $(".btn_play").css("display","block")
    $(".imgs>img").eq(0).css({"left":-1440+sp})
    $(".imgs>img").eq(1).css({"left":-720+sp})
    $(".imgs>img").eq(2).css({"left":0+sp})
    $(".imgs>img").eq(3).css({"left":720+sp})
    $(".imgs>img").eq(4).css({"left":1440+sp})
    $("#btn_dot").children().eq(0).css("background-color","purple")
    prevIndex=0
    play=setInterval(function(){slide();},2000)
}
function slide(){
    if(imgs==now){
        now=0;
    }
    else{
        now++;
    }
    curr_slide(now)
}   

function curr_slide(e){
    if(e==1){
        $(".imgs>img").eq(1).css({"left":-1440+sp});
        $(".imgs>img").eq(2).css({"left":-720+sp});
        $(".imgs>img").eq(3).css({"left":0+sp});
        $(".imgs>img").eq(4).css({"left":720+sp});
        $(".imgs>img").eq(0).css({"left":1440+sp});
        $("#btn_dot").children().eq(prevIndex).css("background-color","#aaa")
        $("#btn_dot").children().eq(1).css("background-color","purple")
        prevIndex=1

    }else if(e==2){
        $(".imgs>img").eq(2).css({"left":-1440+sp});
        $(".imgs>img").eq(3).css({"left":-720+sp});
        $(".imgs>img").eq(4).css({"left":0+sp});
        $(".imgs>img").eq(0).css({"left":720+sp});
        $(".imgs>img").eq(1).css({"left":1440+sp});
        $("#btn_dot").children().eq(prevIndex).css("background-color","#aaa")
        $("#btn_dot").children().eq(2).css("background-color","purple")
        prevIndex=2
    }else if(e==3){
        $(".imgs>img").eq(3).css({"left":-1440+sp});
        $(".imgs>img").eq(4).css({"left":-720+sp});
        $(".imgs>img").eq(0).css({"left":0+sp});
        $(".imgs>img").eq(1).css({"left":720+sp});
        $(".imgs>img").eq(2).css({"left":1440+sp});
        $("#btn_dot").children().eq(prevIndex).css("background-color","#aaa")
        $("#btn_dot").children().eq(3).css("background-color","purple")
        prevIndex=3
    }else if(e==4){
        $(".imgs>img").eq(4).css({"left":-1440+sp});
        $(".imgs>img").eq(0).css({"left":-720+sp});
        $(".imgs>img").eq(1).css({"left":0+sp});
        $(".imgs>img").eq(2).css({"left":720+sp});
        $(".imgs>img").eq(3).css({"left":1440+sp});
        $("#btn_dot").children().eq(prevIndex).css("background-color","#aaa")
        $("#btn_dot").children().eq(4).css("background-color","purple")
        prevIndex=4
    }else{
        $(".imgs>img").eq(0).css({"left":-1440+sp});
        $(".imgs>img").eq(1).css({"left":-720+sp});
        $(".imgs>img").eq(2).css({"left":0+sp});
        $(".imgs>img").eq(3).css({"left":720+sp});
        $(".imgs>img").eq(4).css({"left":1440+sp});
        $("#btn_dot").children().eq(prevIndex).css("background-color","#aaa")
        $("#btn_dot").children().eq(0).css("background-color","purple")
        prevIndex=0
    }
}

