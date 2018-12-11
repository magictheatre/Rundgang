$(document).ready(init);




 //if ( $(window).width() <= 400 ) {


     //SCROLLSPEED
var path = $.fn.scrollPath("getPath", {
    
	scrollSpeed: 30, // Default is 50
	rotationSpeed: Math.PI / 10 // Default is Math.PI / 15
    
});

function init() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */
    
    
     $.fn.scrollPath("getPath")
		// Move to 'start' element
    .moveTo(350, 2600, {name: "start"})
    
        .lineTo(500, 2600, {callback: function(){
                $("#wortmarke").fadeIn();
                $("#arrowscroll").fadeIn();
				}},)
       
       .lineTo(600, 2600, {callback: function(){
              $("#wortmarke").fadeOut();
              $("#arrowscroll").fadeOut();
              }},)
       
       .lineTo(2100, 3200, {name: "text2"})
        .lineTo(2400, 2300, {name: "text3"})
        .lineTo(300, 1800, {name: "text4"})
        .lineTo(2400, 1300, {name: "text5"})
        .lineTo(2400, 400, {name: "text6"})
       
       .lineTo(1500, 500, {callback: function(){
			  $("#wortmarke").fadeOut();
                }})
       
       .lineTo(1030, 695, {name: "text7"})
        .lineTo(1000, 700,   {callback: function(){
            $("#wortmarke").fadeIn();
            }},
            {name: "logo"})
    
    
  /* $.fn.scrollPath("getPath")
		// Move to 'start' element
    .moveTo(300, 3300, {name: "start"})
    
        .lineTo(300, 3250, {callback: function(){
                $("#wortmarke").fadeIn();
                $("#arrowscroll").fadeIn();
				}}, {name: "start2"},)
        .lineTo(300, 3200, {name: "text1b"})
        .lineTo(400, 2450, {name: "text1"})
       
       .lineTo(450, 2500, {callback: function(){
              $("#wortmarke").fadeOut();
              $("#arrowscroll").fadeOut();
              }},)
       
       .lineTo(2100, 3200, {name: "text2"})
        .lineTo(2400, 2300, {name: "text3"})
        .lineTo(300, 1800, {name: "text4"})
        .lineTo(2400, 1300, {name: "text5"})
        .lineTo(2400, 400, {name: "text6"})
       
       .lineTo(1500, 500, {callback: function(){
			  $("#wortmarke").fadeOut();
                }})
       
       .lineTo(1030, 695, {name: "text7"})
        .lineTo(1000, 700,   {callback: function(){
            $("#wortmarke").fadeIn();
            }},
            {name: "logo"})*/
    



//.lineTo(600, 1600, {callback: function() { highlight($(".settings"));}, name: "syntax"})

//.lineTo(1750, 1600, {callback: function() {highlight($(".sp-scroll-handle"));},name: "scrollbar"})

        //.lineTo(1800, 1000)
       // .arc(200, 1200, 200, -Math.PI/2, Math.PI/2, true)
       // .lineTo(600, 2000)
        //.lineTo(600, 2000)
        //.lineTo(1750, 2000)
        //.lineTo(1750, 2500)
        //.lineTo(1750, 3000)
        //.lineTo(500, 3000)
        //.lineTo(500, 4000)
        //.lineTo(1400, 4000)
        //.lineTo(2400, 3800)
        //.lineTo(2400, 3800)
       // .lineTo(2400, 2600)
       // .lineTo(1200, 3300, {name: "end"})

    //wrapAround false = kehrt nicht zum Anfang zurück
	$(".wrapper").scrollPath({drawPath: true, wrapAround: false});

  // Add scrollTo on click on the navigation anchors
  	$("nav").find("a").each(function() {
  		var target = $(this).attr("href").replace("#", "");
  		$(this).click(function(e) {
  			e.preventDefault();

  			// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
  			// for extra easing functions like the one below
  			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
  		});
  	});


		$("#text1").click(function(){
		   $("#wortmarke").fadeOut();
           /* $("#titel").fadeOut();*/
		  });
		   $("#text6").click(function(){
		   $("#wortmarke").fadeIn();
		  });



	/* ===================================================================== */


 }
