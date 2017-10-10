$(document).ready(function() {

    /* ======= Twitter Bootstrap hover dropdown ======= */   
    
    $('[data-hover="dropdown"]').dropdownHover();
    
    /* ======= Fixed header when scrolled ======= */    
    $(window).on('scroll load', function() {
         
         if ($(window).scrollTop() > 0) {
             $('#header').addClass('scrolled');
         }
         else {
             $('#header').removeClass('scrolled');
             
         }
    });
    
    
    /* ======= jQuery Placeholder ======= */
    
    $('input, textarea').placeholder();    
    
    /* ======= FAQ accordion ======= */
    function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find('.panel-title a')
        .toggleClass('active')
        .find("i.fa")
        .toggleClass('fa-plus-square fa-minus-square');
    }
    $('.panel').on('hidden.bs.collapse', toggleIcon);
    $('.panel').on('shown.bs.collapse', toggleIcon);    
    
    
    /* ======= Header Background Slideshow - Flexslider ======= */    
    
    $('.bg-slider').flexslider({
        animation: "fade",
        directionNav: false, //remove the default direction-nav - https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
        controlNav: false, //remove the default control-nav
        slideshowSpeed: 8000
    });
     
    
     /* ======= Testimonial Bootstrap Carousel ======= */
    $('#testimonials-carousel').carousel({
      interval: 8000 
    });
    
    
    /* ======= Style Switcher ======= */    
    $('#config-trigger').on('click', function(e) {
        var $panel = $('#config-panel');
        var panelVisible = $('#config-panel').is(':visible');
        if (panelVisible) {
            $panel.hide();          
        } else {
            $panel.show();
        }
        e.preventDefault();
    });
    
    $('#config-close').on('click', function(e) {
        e.preventDefault();
        $('#config-panel').hide();
    });
    
    
    $('#color-options a').on('click', function(e) { 
        var $styleSheet = $(this).attr('data-style');
		$('#theme-style').attr('href', $styleSheet);	
				
		var $listItem = $(this).closest('li');
		$listItem.addClass('active');
		$listItem.siblings().removeClass('active');
		
		e.preventDefault();
		
	});
	
	//=====特点1 tab
	$('.features li').each(function(){
		$(this).click(function(){
			var index = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$('.property').eq(index).addClass('active').siblings().removeClass('active');
		})
	});
	
	//=====特点2 tab
	$('.feature').each(function(){
		$(this).click(function(){
			var index = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$('.pp').eq(index).addClass('active').siblings().removeClass('active');
		})
	});


	
	//-------返回顶部--------
	$(window).scroll(function() {
		if($(this).scrollTop() >= 100) {
			$("#topcontrol").fadeIn(600);	
		} else if($(this).scrollTop() <= 10) {
			$("#topcontrol").fadeOut(600);
		}
	});
	
	$("#topcontrol").click(function() {
		$("body,html").animate({scrollTop:0},800);
	});

});