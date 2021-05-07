//alert("test");
$(window).scroll(function(){
	if($(this).scrollTop()>0){//메서드괄호를 붙여줄것.
		$(".top").fadeIn();
	}else{
		$(".top").fadeOut();
	}
});

$(".top").click(function(){
	$("body,html").animate({scrollTop:0},800);
});