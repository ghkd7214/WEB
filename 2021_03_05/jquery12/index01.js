var imgs = 2;
var now = 0;
start();
function start(){
    $(".imgs>img").eq(0).css("opacity","1");
    //$(".imgs>img").eq(0).css({"opacity":"1"},{"다른옵션","123"});  ()안에 {"옵션":"값"}를 쓰면 2개이상도가능
    setInterval(function(){slide();},2000)
}

function slide(){
    if(imgs==now){
        now=0;
    }
    else{
        now++;
    }
    $(".imgs>img").eq(now-1).stop().animate({"opacity":"0"},2000)
    $(".imgs>img").eq(now).stop().animate({"opacity":"1"},2000)
}

