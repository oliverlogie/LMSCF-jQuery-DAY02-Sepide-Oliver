var a = $("#animate");
a.show(5000);
$("#animate").hide(5000);

$(document).ready(function() {
	$('li').on('click', function(){
		$(this).animate({
			opacity: 0.0,
			paddingLeft: '+=80'},
			500, function(){
				$(this).remove();
			});
		});


$('#button').click(function(){
	var value = $('input').val();
	console.log(value);
	$('ul').append("<li>"+value+"</li>");
});



	});