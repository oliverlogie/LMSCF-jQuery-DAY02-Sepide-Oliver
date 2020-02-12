$(document).ready(function() {
// 	$("#moveme").css("left",.draggable();
// 	$("#moveme").mousemove(function(e){
//       $('#airplain').css({'top': e.clientY - 20, 'left': e.clientX - 20});
// });
	// body...
	 $(document).mousemove(function(event) {
              console.log("X= " + event.pageX);
              console.log("Y= " + event.pageY);
              $("#moveme").css({"left": event.pageX-100,"top": event.pageY-100});
      });
	 $("#moveme").click(function() {
	 	var a = 
	 	 $(document).off( "mousemove");
	 	 $(this).animate({
			top: '+=500'},
			500, function(){
				$(this).fadeOut("slow").fadeIn("slow");
			});
	 	// $("#moveme").fadeOut("slow").fadeIn("slow");
	 	// body...
	 });
});