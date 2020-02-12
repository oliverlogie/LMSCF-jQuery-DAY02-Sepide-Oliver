$(document).ready(function() {
// 	$("#moveme").css("left",.draggable();
// 	$("#moveme").mousemove(function(e){
//       $('#airplain').css({'top': e.clientY - 20, 'left': e.clientX - 20});
// });
	// body...
	var y;
	 $(document).mousemove(function(a) { 

              //console.log("X= " + a.pageX); 
             // console.log("Y= " + a.pageY);
               y = a.pageY;
           
              $("#moveme").css({"left": a.pageX-100,"top": a.pageY-100});
              
      }); 
	 $("#moveme").click(function() {

	 	console.log(y +"Y =");
         var boundY= window.innerHeight;
         console.log(boundY +"boundY -");
         var fall=boundY-y;
          	console.log(fall + "result");
	 	 $(document).off( "mousemove");
	 	 $(this).animate({
			top: fall},
			500, function(){
				$(this).fadeOut("slow").fadeIn("slow");
			});
		
	 	// $("#moveme").fadeOut("slow").fadeIn("slow");
	 	// body...
	 });

});