// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    $("h1").on("mouseenter", function() {
    	$("h1").text("Hello! :)").addClass("red");
    });

    $("h1").on("mouseleave", function() {
    	$("h1").text("See ya later!").removeClass("red");
    });

});