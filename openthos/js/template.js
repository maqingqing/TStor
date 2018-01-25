
(function($){
	$(document).ready(function(){
		
		//Show dropdown on hover only for desktop devices
		//-----------------------------------------------
//		var delay=0, setTimeoutConst;
//		if (Modernizr.mq('only all and (min-width: 768px)') && !Modernizr.touch) {
//			$('.main-navigation .navbar-nav>li.dropdown, .main-navigation li.dropdown>ul>li.dropdown').hover(
//			function(){
//				var $this = $(this);
//				setTimeoutConst = setTimeout(function(){
//					$this.addClass('open').slideDown();
//					$this.find('.dropdown-toggle').addClass('disabled');
//				}, delay);
//
//			},	function(){ 
//				clearTimeout(setTimeoutConst );
//				$(this).removeClass('open');
//				$(this).find('.dropdown-toggle').removeClass('disabled');
//			});
//		};

		//Show dropdown on click only for mobile devices
		//-----------------------------------------------
		if (Modernizr.mq('only all and (max-width: 767px)') || Modernizr.touch) {
			$('.main-navigation [data-toggle=dropdown], .header-top [data-toggle=dropdown]').on('click', function(event) {
			// Avoid following the href location when clicking
			event.preventDefault(); 
			// Avoid having the menu to close when clicking
			event.stopPropagation(); 
			// close all the siblings
			$(this).parent().siblings().removeClass('open');
			// close all the submenus of siblings
			$(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
			// opening the one you clicked on
			$(this).parent().toggleClass('open');
			});
		};

		

		//Main slider
		//-----------------------------------------------

		//Revolution Slider  banner上的切换以及动画效果
		if ($(".slider-banner-container").length>0) {
			
//			$(".tp-bannertimer").show();//banner下方的进度条

			$('.slider-banner-container .slider-banner').show().revolution({
				delay:3000,
				startwidth:1140,
				startheight:520,
				
				navigationArrows:"solo",
				
				navigationStyle: "round",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				fullWidth:"on",

				spinner:"spinner0",
				
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				onHoverStop: "off",

				shuffle:"off",
				
				autoHeight:"off",						
				forceFullWidth:"off",						
										
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,						
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,
				
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});

			$('.slider-banner-container .slider-banner-2').show().revolution({
				delay:3000,
				startwidth:1140,
				startheight:520,
				
				navigationArrows:"solo",
				
				navigationStyle: "preview4",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				fullWidth:"on",

				spinner:"spinner0",
				
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				onHoverStop: "off",

				shuffle:"off",
				
				autoHeight:"off",						
				forceFullWidth:"off",						
										
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,						
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,
				
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});

			



		};

		//页面里的轮播图
		//-----------------------------------------------
		if ($('.owl-carousel').length>0) {
			$(".owl-carousel.carousel").owlCarousel({
				items: 4,
				pagination: false,
				navigation: true,
				navigationText: false
			});
			$(".owl-carousel.carousel-autoplay").owlCarousel({
				items: 4,
				autoPlay: 5000,
				pagination: false,
				navigation: true,
				navigationText: false
			});
			$(".owl-carousel.clients").owlCarousel({
				items: 4,
				autoPlay: true,
				pagination: false,
				itemsDesktopSmall: [992,5],
				itemsTablet: [768,4],
				itemsMobile: [479,3]
			});
			$(".owl-carousel.content-slider").owlCarousel({
				singleItem: true,
				autoPlay: 5000,
				navigation: false,
				navigationText: false,
				pagination: false
			});
			$(".owl-carousel.content-slider-with-controls").owlCarousel({
				singleItem: true,
				autoPlay: false,
				navigation: true,
				navigationText: false,
				pagination: true
			});
			$(".owl-carousel.content-slider-with-controls-autoplay").owlCarousel({
				singleItem: true,
				autoPlay: 5000,
				navigation: true,
				navigationText: false,
				pagination: true
			});
			$(".owl-carousel.content-slider-with-controls-bottom").owlCarousel({
				singleItem: true,
				autoPlay: false,
				navigation: true,
				navigationText: false,
				pagination: true
			});
		};

		// Animations 用户部分的动画
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						var delay = ($this.attr("data-effect-delay") ? $this.attr("data-effect-delay") : 1);
						if(delay > 1) $this.css("effect-delay", delay + "ms");
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, delay);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Stats Count To openthos云部分
		//-----------------------------------------------
		if ($(".stats [data-to]").length>0) {
			$(".stats [data-to]").each(function() {
				var $this = $(this),
				offset = $this.offset().top;
				if($(window).scrollTop() > (offset - 800) && !($this.hasClass('counting'))) {
					$this.addClass('counting');
					$this.countTo();
				};
				$(window).scroll(function() {
					if($(window).scrollTop() > (offset - 800) && !($this.hasClass('counting'))) {
						$this.addClass('counting');
						$this.countTo();
					}
				});
			});
		};

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			if($(".header.fixed").length>0) {
				$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
						if (target.length) {
							$('html,body').animate({
								scrollTop: target.offset().top-65
							}, 1000);
							return false;
						}
					}
				});
			} else {
				$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
						if (target.length) {
							$('html,body').animate({
								scrollTop: target.offset().top
							}, 1000);
							return false;
						}
					}
				});
			}
		}

		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			if($(".fixed.header").length>0) {
				$('body').scrollspy({ 
					target: '.scrollspy',
					offset: 85
				});
			} else {
				$('body').scrollspy({ 
					target: '.scrollspy',
					offset: 20
				});
			}
		}

		//Scroll totop
		//-----------------------------------------------
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$(".scrollToTop").fadeIn();	
			} else {
				$(".scrollToTop").fadeOut();
			}
		});
		
		$(".scrollToTop").click(function() {
			$("body,html").animate({scrollTop:0},800);
		});
		
		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}
		
		// Pricing tables popovers
		//-----------------------------------------------
		if ($(".pricing-tables").length>0) {
			$(".plan .pt-popover").popover({
				trigger: 'hover'
			});
		};

		// Parallax section
		//-----------------------------------------------
		if (($(".parallax").length>0)  && !Modernizr.touch ){
			$(".parallax").parallax("50%", 0.2, false);
		};

		// Remove Button
		//-----------------------------------------------
		$(".btn-remove").click(function() {
			$(this).closest(".remove-data").remove();
		});

		// Shipping Checkbox
		//-----------------------------------------------
		if ($("#shipping-info-check").is(':checked')) {
			$("#shipping-information").hide();
		}
		$("#shipping-info-check").change(function(){
			if ($(this).is(':checked')) {
				$("#shipping-information").slideToggle();
			} else {
				$("#shipping-information").slideToggle();
			}
		});

	}); // End document ready
	
	
	//高性能下面的自动tab切换
	var flag = true;
//	setInterval(function(){
//		if(flag){
//			$('#tab_list1').find('li').eq(1).find('a').click();
//		}else{
//			$('#tab_list1').find('li').eq(0).find('a').click();
//		}
//		flag = !flag;
//	},5000);

//$('.cloud_imgs').each(function(i,v){
//	
//	$(this).hover(function(){
////		console.log(i,v);
//		$(this).attr('src','images/cloud'+i+i+'.png');
//	},function(){
//		$(this).attr('src','images/cloud'+i+'.png');
//	})
//})

//页面子导航
var subNav_active = $(".nav_fa");
var subNav_scroll = function(target){
	subNav_active.removeClass("adv_active");
	target.parent().addClass("adv_active");
};
$("#subNav a").click(function(){
	subNav_scroll($(this));
	var target = $(this).attr("href");
	var targetScroll = $(target).offset().top-70;
	$(this).css('text-decoration','none');
	$("html,body").animate({scrollTop:targetScroll},300);
	return false;
});
//页面跳转时定位
if(window.location.hash){
	var targetScroll = $(window.location.hash).offset().top - 70;
	$("html,body").animate({scrollTop:targetScroll},300);
}
$(window).scroll(function(){
	var $this = $(this);
	var targetTop = $(this).scrollTop();
	var headerTop = $('.header').offset().top;
	var bannerTop = $("#banner").offset().top;
	var bannerHeight = $('#banner').height();
	var height = $(window).height();
	// console.log(targetTop,bannerTop,height,bannerHeight);
	
	if(targetTop<=100){
		subNav_active.removeClass("adv_active");
	}
	
	if (targetTop >= bannerHeight+bannerTop-70){
		$("#subNav").addClass("fixedSubNav");
		$(".empty-placeholder").removeClass("hidden");
	}else{
		$("#subNav").removeClass("fixedSubNav");
		$(".empty-placeholder").addClass("hidden");
	}
	var one_height = $("#show1").offset().top-90;
	var two_height = $("#show2").offset().top-90;
	var three_height = $("#show3").offset().top-90;
	var four_height = $("#show4").offset().top-90;
//	var five_height = $("#show5").offset().top-90;
//	var six_height = $("#show6").offset().top-90;
//	var seven_height = $("#show7").offset().top-90;
//	var eight_height = $("#show8").offset().top-90;
	if(targetTop>=one_height && targetTop < two_height){
		subNav_scroll($(".adv_one"));
	}else if(targetTop >= two_height && targetTop < three_height){
			subNav_scroll($(".adv_two"));
	}else if(targetTop >= three_height && targetTop < four_height){
			subNav_scroll($(".adv_three"));
	}else if(targetTop >= four_height){
			subNav_scroll($(".adv_four"));
	}
//else if(targetTop >= five_height && targetTop < six_height){
//			subNav_scroll($(".adv_five"));
//	}else if(targetTop >= six_height && targetTop < seven_height){
//			subNav_scroll($(".adv_six"));
//	}else if(targetTop >= seven_height && targetTop < eight_height){
//			subNav_scroll($(".adv_seven"));
//	}else if(targetTop >= eight_height){
//		subNav_scroll($(".adv_eight"));
//	}
})

})(this.jQuery);