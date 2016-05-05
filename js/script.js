$(function() {

  $(".numbers-row").append('<div class="dec button">-</div> <div class="inc button">+</div> ');

  $(".button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
  	  var newVal = parseFloat(oldValue) + 1;
  	} else {
	   // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
	    } else {
        newVal = 0;
      }
	}

    $button.parent().find("input").val(newVal);

  });

});


$(document).ready(function(){
	
	$('.middle a.callback').click(function(){
		$('header .modal_callback').toggleClass('active');
	});
	
	$('.notice').click(function(){
		$('.wraper_mail_send ').addClass('active');
	});
	$('.wraper_mail_send .close, .wraper_mail_send .close_block').click(function(){
		$('.wraper_mail_send').removeClass('active');
	});	
	
	$('.filter_active').click(function(){
		$('.sidebar, .sidebar_close').toggleClass('active');
	});
	$('.sidebar_close').click(function(){
		$('.sidebar, .sidebar_close').removeClass('active');
	});	
	
 
	
	
	setTimeout(function() { 
		$('.wraper_popup.offer').addClass('active');
	}, 2000);
	
	
	$('.wraper_popup .next').click();
	
	$('.button_menu_top').click(function(){
		$('header').toggleClass('active');
		$('.button_menu_top').toggleClass('active');
	});
	
	
	$('img.delete').click(function(){
		$(this).closest('tr').fadeOut();
	});
	
	$('.wraper_popup .close, .wraper_popup .modal_close').click(function(){
		$('.wraper_popup ').removeClass('active');
	});
	$('.cart_form button').click(function(e){
		e.preventDefault();
		$('.wraper_popup ').addClass('active');
	});	
	
 
	
	 
	
	$('.top-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
		autoplaySpeed:4000,
		draggable:false,
//		fade:true,
		dots:true,
		speed: 1200
     });
	
	$('.slider_comment').slick({
		dots:false,  
		slidesToShow: 5,
		slidesToScroll: 1,     
		infinite: true,
		speed: 400,
		cssEase: 'linear',        
		prevArrow:'.coments_block .pagination .prev',
		nextArrow:'.coments_block .pagination .next',
		  responsive: [
			{
			  breakpoint: 960,
			  settings: {
				slidesToShow: 4
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 3
			  }
			},			  
			{
			  breakpoint: 640,
			  settings: {
				slidesToShow: 2
			  }
			}
		  ]			
	}); 	
	
	$('.popup_slider').slick({
		dots:false,  
		slidesToShow: 3,
		slidesToScroll: 1,     
        
		prevArrow:'.wraper_popup_slider .controlers .prev',
		nextArrow:'.wraper_popup_slider .controlers .next',
		  responsive: [
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2
			  }
			} ,
			{
			  breakpoint: 650,
			  settings: {
				slidesToShow: 1
			  }
			}			  
		  ]			
	}); 	
	
	
 	
});
 