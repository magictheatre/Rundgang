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
    .moveTo(1300, 800, {name: "start"})
    .lineTo(500, 200,
            {callback: function(){
                $("#wortmarke").fadeIn();
                /*$("#titel").fadeIn();*/
                $("#arrowscroll").fadeIn();
				}},)
    
    .lineTo(500, 200, {name: "text1b"})
    .arc(2300, 700, 120, 0, Math.PI/2, false,
          {callback: function(){
              $("#wortmarke").fadeOut();
              /*$("#titel").fadeOut();*/
              $("#arrowscroll").fadeOut();
              }},
            {name: "text1"})
    .lineTo(150, 250, {name: "text2"})
    .arc(70, 350, 100, -2*Math.PI/2, Math.PI/2, true)
    .lineTo(2180, 1400, {name: "text3"})
    .lineTo(2180, 1600)
    .arc(2080, 1600, 100, 0, Math.PI/2, false,)
    .lineTo(100, 2000,)
    .arc(-300, 1000, 1200, Math.PI/2, Math.PI/2, true,
         {name: "text4"}  )
    .lineTo(-300, 3350, {name: "text5"})
    .arc(-200, 3350, 100, -2*Math.PI/2, Math.PI/2,          true,)
    .lineTo(1300, 3200)
    .lineTo(2590, 2295,
			 {callback: function(){
			  $("#wortmarke").fadeOut();
              /*$("#titel").fadeOut();*/
                }},)
    .lineTo(2600, 2300, {name: "text6"})
    .lineTo(930, 2555, {name: "text7"})
    .lineTo(900, 2560,
            {callback: function(){
            $("#wortmarke").fadeIn();
            }},
            {name: "logo"})





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
