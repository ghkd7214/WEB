var leftIndex;
var slideIndex=0;

// console.log(bar.length)

$(".prev").addClass("off")
$(".next").click(function(){
    if(slideIndex>-3){
    slideIndex--;
    leftIndex = slideIndex*106
    $(".prev").removeClass("off")
    $(".bar").css("margin-left",leftIndex)
    }
    if(slideIndex==-3){
        $(".next").addClass("off")
    }
    console.log(slideIndex)
})
$(".prev").click(function(){
    if(slideIndex<0){
    slideIndex++;
    leftIndex = slideIndex*106
    $(".next").removeClass("off")
    $(".bar").css("margin-left",leftIndex)
    }
    if(slideIndex==0){
        $(".prev").addClass("off")
    }
    console.log(slideIndex)
})