$(document).ready(function() {
	var y;
	var X;
	 $(document).mousemove(function(a) { 
	 	//console.log(y +"Y =");
	 	console.log(a.pageY);
               y = a.pageY; 
               X = a.pageX;          
              
              if(y>160 && y<450 && X>124 && X<1070)
              {
              	 $("#moveme").css({"left": a.pageX-100,"top": a.pageY-100});
              }
              
      }); 
	 $("#moveme").click(function() {
	$("#RaketDiv").show();
	 	// console.log(y +"Y =");

   //       //var boundY= window.innerHeight;
   //       var boundY=$("#divMain").height();
   //       console.log(boundY +"boundY -");
   //       var fall=boundY-y;
   //        	console.log(fall + "result");
	 	//  
	 	$(document).off( "mousemove");

	 	 $("#RaketDiv").animate({
			top: y,
			left: X},
			1500, function(){
				
             $("#RaketDiv").hide();
             $("#moveme img").attr("src","boom.gif").css("border-radius","50%");
             
			});
	
	 });

});