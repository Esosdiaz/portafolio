jQuery(document).ready(function(){
	//animacion de los saltos del nav
	$('h4').append('<a href="#top" class="gototop">.</a>');
    	linkNav = $('a[href^="#"]');
    	linkNav.on('click',function(e) {
   		e.preventDefault();
    	var href = $(this).attr('href');
    	$('html, body').animate({ scrollTop : $( href ).offset().top }, '1000');
    	});
    	
	$('#inicio').fadeIn(2000);

    //iniciar y pausar el video en el modal
	$('#audioVideo').on('shown.bs.modal', function () {
  		$('#reel')[0].play();
	})
	$('#audioVideo').on('hidden.bs.modal', function () {
  		$('#reel')[0].pause();
	})

	


});