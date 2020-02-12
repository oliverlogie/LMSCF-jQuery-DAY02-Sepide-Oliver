$("img[src*=phone]").parent().css("background", "green");
$("img[src*=tablet]").parent().css("background", "blue");
$("img[src*=notebook]").parent().css("background", "red");

$(".notebook").click(function(){
	$("img[src*=phone]").parent().parent().parent().parent().parent().css("display", "none");
	$("img[src*=tablet]").parent().parent().parent().parent().parent().css("display", "none");
	$("img[src*=notebook]").parent().parent().parent().parent().parent().css("display", "block");
});

$(".tablet").click(function(){
	$("img[src*=phone]").parent().parent().parent().parent().parent().css("display", "none");
	$("img[src*=notebook]").parent().parent().parent().parent().parent().css("display", "none");
	$("img[src*=tablet]").parent().parent().parent().parent().parent().css("display", "block");
});

$(".phones").click(function(){
	$("img[src*=tablet]").parent().parent().parent().parent().parent().css("display", "none");
	$("img[src*=notebook]").parent().parent().parent().parent().parent().css("display", "none");
	$("img[src*=phone]").parent().parent().parent().parent().parent().css("display", "block");

});

$(".all").click(function(){
	$("img[src*=tablet]").parent().parent().parent().parent().parent().css("display", "block");
	$("img[src*=notebook]").parent().parent().parent().parent().parent().css("display", "block");
	$("img[src*=phone]").parent().parent().parent().parent().parent().css("display", "block");
});