$(".btn_prev").addClass("off")

$(".btn_next").click(function(){    //다음버튼 클릭동작
    if(!$("#slides li").last().is(":visible")){  //if 조건문 slides li의 마지막이 보이는상태가 아니라면 
        $("#slides li:visible").hide().next("li").fadeIn("slow")
        $(".btn_prev").removeClass("off")
    }
    if($("#slides li").last().is(":visible")){
        $(".btn_next").addClass("off")
    }
})

$(".btn_prev").click(function(){    //이전버튼 클릭동작
    if(!$("#slides li").first().is(":visible")){  //if 조건문 slides li의 처음이 보이는상태가 아니라면 
        $("#slides li:visible").hide().prev("li").fadeIn("slow")
        $(".btn_next").removeClass("off")
    }
    if($("#slides li").first().is(":visible")){
        $(".btn_prev").addClass("off")
    }
})