/******************************

INDEX:

	s00 - Predefined Variables
	s01 - Preloader
	s02 - Primary Slider Settings
	s03 - Primary Slider Background Settings
	s04 - Full Screen Header
	s05 - Header Background Video
	s06 - Header Background Slider
    s07 - Main Navigation Menu
	s08 - Skill Bars
    s12 - Slide left action for Mobile Menu
	s13 - Simple Image Slider
	s14 - Testimonial Carousel
    s15 - Client Carousel
    s15 - Services Carousel
	s15 - Team Carousel
	s16 - Smooth Scroll to anchor tags
	s17 - Scroll to Top JS
	s18 - Placeholder JS
	s19 - Parallax JS
	s20 - Blog Grid Background Settings
    s21 - Tilt Settings
	s22 - Animation Settings


******************************/

(function($) {

    "use strict";

    // Declaring main variable
    var CODEXIN = {};


    /************************************************************
        s00 - Predefined Variables
    *************************************************************/

    var $window 			= $(window),
        $document 			= $(document),
        $slider             = $("#primary-slider"),
        $vslider 			= $("#primary-slider-with-video"),
        // $fullscreen 		= $(".sp-slide"),
        // $fullscreenVideo 	= $("#header_full_screen_video"),
        $parallax 			= $(".jarallax-default"),
        $parallaxSlow		= $(".jarallax-slow"),
        $bgSlide 			= $("#header_bg_slide"),
        $mainMenu 			= $(".stellarnav"),
        $pageloader 		= $(".cx-pageloader"),
        $intelHeader 		= $(".intelligent-header"),
        $footer 			= $("#colophon"),
        $counter 			= $(".counter"),
        $isoContainer 		= $(".portfolio-wrapper"),
        $isoFilter	 		= $(".portfolio-filter li"),
        $simpleSlider 		= $(".simple-slider-container"),
        $testimonial        = $(".testimonial-container"),
        $testimonialTwo		= $(".testimonial-container-type-2"),
        // $slickNav 			= $(".testimonial-nav"),
        // $slickThree 		= $(".testimonial-carousel-type-02"),
        $clients            = $(".client-carousel"),
        $services           = $(".services-carousel"),
        $team               = $(".team-carousel"),
        $skillBar 			= $(".skillbar"),
        $toTop 				= $("#toTop"),
        $blogGrid 			= $(".blog-item-grid"),
        $tiltEl             = $(".tilt-element");
        
    // Check if element exists
    $.fn.cxExists = function() {
        return this.length > 0;
    };


    /************************************************************
        s01 - Preloader
    *************************************************************/

    CODEXIN.preloader = function() {
		$pageloader.delay(300).fadeOut('fast');
    };


    /************************************************************
        s02 - Primary Slider Settings
    *************************************************************/

	CODEXIN.primarySlider = function() {
		if ($slider.cxExists()) {
			$slider.sliderPro({
				width: '100%',
				// height: '100%',
				arrows: true,
				buttons: false,
				waitForLayers: true,
				slideDistance: 0,
                forceSize: 'fullWindow',
				autoplay: false,
				fade: true,
				breakpoints: {
					768: {
						arrows: false
					}
				}
			});
			$(".sp-slide").append('<div class="section-overlay"></div>');
		}

        if ($vslider.cxExists()) {
            $vslider.sliderPro({
                width: '100%',
                arrows: true,
                buttons: false,
                waitForLayers: true,
                slideDistance: 0,
                forceSize: 'fullWindow',
                autoplay: false,
                fade: true,
                reachVideoAction: 'playVideo',
                breakpoints: {
                    768: {
                        arrows: false
                    }
                }
            });
            $(".sp-slide").append('<div class="video-section-overlay"></div>');
        }
	};


    /************************************************************
        s03 - Primary Slider Background Settings
    *************************************************************/

	CODEXIN.primarySliderBgSetting = function() {
        if ($slider.cxExists()) {
            $("#primary-slider .sp-slide").each(function() {
                var $this = $(this);
                var img = $this.find(".slider-image").attr("src");

                $this.find(".image-placeholder").css({
                    backgroundImage: "url("+ img +")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                })
            });
        }
	};


    /************************************************************
        s04 - Full Screen Header
    *************************************************************/

    CODEXIN.fullscreenHeader = function() {
	    if ( $window.width() > 991) {   
			$fullscreen.css("height", window.innerHeight);
	    } 
	    else {
	      	$fullscreen.css("height", "500px");
	    }
    };


    /************************************************************
        s05 - Header Background Video
    *************************************************************/

    CODEXIN.fullscreenVideoHeader = function() {
	    if ($fullscreenVideo.cxExists()) {
	        $fullscreenVideo.wallpaper({
	            source: {
	                poster: "assets/img/slider/home-2/poster.jpg",
	                webm: "assets/videos/video.webm",
	                mp4: "assets/videos/video.mp4",
	                ogg: "assets/videos/video.ogv"
	            }

	        });
	    }
    };


    /************************************************************
        s06 - Header Background Slider
    *************************************************************/

	CODEXIN.backgroundSliderHeader = function() {
	    if ($bgSlide.cxExists()) {
	        $bgSlide.backstretch([
	            "assets/img/slider/home-4/slide-1.jpg",
	            "assets/img/slider/home-4/slide-2.jpg",
	            "assets/img/slider/home-4/slide-3.jpg" 
	        ], 
	        {
	            duration: 4000,
	            fade: 750,
	            preload: 0,
	            start: 2

	        });
	    }
	};


    /************************************************************
        s07 - Main Navigation Menu
    *************************************************************/

    CODEXIN.mainNav = function() {
		$mainMenu.stellarNav({
			theme     : 'plain',
			breakpoint: 768,
			phoneBtn: '+1234567890',
			position: 'right',
			showArrows: true,
			closeBtn     : false,
			scrollbarFix: false
		});

	    // Submenu Intelligent hover functionality
	    $mainMenu.on('mouseover', ".sub-menu", function() {
	        var menu = $(this);
	        var child_menu = $(this).find('ul');
	        if ($(menu).offset().left + $(menu).width() + $(child_menu).width() > $window.width()) {
	            $(child_menu).css({
	                "left": "inherit",
	                "right": "100%"
	            });
	        }
	    });
	};


    /************************************************************
        s08 - Intelligent Header Space
    *************************************************************/

	CODEXIN.elementHeights = function() {
        var headerHeight = $intelHeader.outerHeight();
        var footerHeight = $footer.outerHeight();

        $(".intelligent-header-space").height(headerHeight);

        if ($(".fixed-footer").cxExists()) {
	        if ( $window.width() > 767) {  
		        $("#whole").css('margin-bottom', footerHeight);
		    }
		}
    };


    /************************************************************
        s09 - Headroom Js for Auto Hide the header on scroll
    *************************************************************/

    CODEXIN.headerAutoHide = function() {
	    var navContainer = document.querySelector(".intelligent-header");
	    // construct an instance of Headroom, passing the element
	    var headroom = new Headroom(navContainer);
	    // initialise
	    headroom.init();

	    $window.on('scroll', function() {
	        var height = $window.scrollTop();

	        if (height < 200) {
	            $intelHeader.removeClass('scrolling-up');
	        } else {
	            $intelHeader.addClass('scrolling-up');
	        }
	    });
	};


    /************************************************************
        s10 - Animated Counter
    *************************************************************/

    CODEXIN.animatedCounter = function() {
    	if ($counter.cxExists()) {
        	$counter.each(function () {
         		var $elem = $(this);                 
           		$elem.appear(function () {
             		$elem.find('.timer').countTo();
          		});                  
        	});
	    }
    };


    /************************************************************
        s11 - Isotope Js for Portfolio Section
    *************************************************************/

    CODEXIN.portfolioIsotope = function() {
    	if ($isoContainer.cxExists()) {
	        $isoContainer.imagesLoaded(function() {
	            $isoContainer.isotope({
	                itemSelector: ".portfolio",
	                layoutMode: 'masonry',
	                stagger: 60
	            });
	        });

	        $isoFilter.on('click', function(e) {
	            var $this = $(this);
	            var $filter = $this.attr('data-filter');

	            $isoContainer.isotope({
	                filter: $filter
	            });

	            $isoFilter.removeClass('active');
	            $this.addClass('active');
	        });

		    //Targeting Portfolio a tag for click event
		    $(".portfolio .primary-title").on('click', function(e) {
		        $(this).find("a.clickable").first().click();
		    });

		    $(".portfolio .primary-title a.clickable").on('click', function(e) {
		        e.stopPropagation();
		    });

	    }
	};


    /************************************************************
        s08 - Skill Bars
    *************************************************************/

    CODEXIN.skillBars = function() {
        if ($skillBar.cxExists()) {
            $skillBar.each(function () {
                var $elem = $(this);                 
                $elem.appear(function () {
                    $elem.skillBars({
                        from: 0,
                        speed: 2500,
                        interval: 100,
                        decimals: 0
                    });
                });                  
            });
        }
    };


    /************************************************************
        s12 - Slide left action for Mobile Menu
    *************************************************************/

    // Initializing mobile menu
    CODEXIN.responsiveMenu = function() {

        /**
         * Slide left instantiation and action.
         */
        if ($("#c-button--slide-left").cxExists()) {
            var $slideBtnLeft = document.querySelector("#c-button--slide-left");
            var slideMenuLeft = new Menu({
                wrapper: "#whole",
                type: "slide-left",
                menuOpenerClass: ".c-button",
                maskId: "#c-mask"
            });

            $slideBtnLeft.addEventListener('click', function(e) {
                e.preventDefault;
                slideMenuLeft.open();
                });
        }

        /**
         * Push left instantiation and action.
         */
        if ($("#c-button--push-left").cxExists()) {
            var pushBtnLeft   = document.querySelector("#c-button--push-left");
            var pushMenuLeft = new Menu({
                wrapper: "#whole",
                type: "push-left",
                menuOpenerClass: ".c-button",
                maskId: "#c-mask"
            });

            pushBtnLeft.addEventListener('click', function(e) {
                e.preventDefault;
                pushMenuLeft.open();
            });
        }

        /**
         * Slide right instantiation and action.
         */
        if ($("#c-button--slide-right").cxExists()) {
            var slideBtnRight = document.querySelector("#c-button--slide-right");
            var slideMenuRight = new Menu({
                wrapper: "#whole",
                type: "slide-right",
                menuOpenerClass: ".c-button",
                maskId: "#c-mask"
            });

            slideBtnRight.addEventListener('click', function(e) {
                e.preventDefault;
                slideMenuRight.open();
            });
        }

        /**
         * Push right instantiation and action.
         */
        if ($("#c-button--push-right").cxExists()) {
            var pushBtnRight  = document.querySelector("#c-button--push-right");
            var pushMenuRight = new Menu({
                wrapper: "#whole",
                type: "push-right",
                menuOpenerClass: ".c-button",
                maskId: "#c-mask"
            });

            pushBtnRight.addEventListener('click', function(e) {
                e.preventDefault;
                pushMenuRight.open();
            });
        }
    };

    // Mobile menu sub-menu actions
    CODEXIN.responsiveSubMenu = function() {
        var nav = $(".mobile-menu");
        // adds toggle button to li items that have children
        nav.find('li a').each(function() {
            if ($(this).next().length > 0) {
                $(this).parent('li').addClass('has-child').append('<a class="drawer-toggle" href="#"><i class="fa fa-angle-down"></i></a>');
            }
        });

        // expands the dropdown menu on each click 
        nav.find('li .drawer-toggle').on('click', function(e) {
            e.preventDefault();
            $(this).parent('li').children('ul').stop(true, true).slideToggle(250);
            $(this).parent('li').toggleClass('open');
        });
    }


    /************************************************************
        s13 - Simple Image Slider
    *************************************************************/

    CODEXIN.simpleImageSlider = function() {
	    if ($simpleSlider.cxExists()) {
  			var imageSlider = new Swiper ($simpleSlider, {
				loop: true,
    			effect: "fade",
    			speed: 1000,
    			roundLengths: true,
				autoplay: {
	    			delay: 3000
				},
    			pagination: {
      				el: '.swiper-pagination',
      				clickable: true
			    }
		  	})
	    }
	};


    /************************************************************
        s14 - Testimonial Carousel
    *************************************************************/

	CODEXIN.testimonialCarousel = function() {
		if ($testimonial.cxExists()) {
  			var testimonial = new Swiper ($testimonial, {
			    loop: true,
			    spaceBetween: 40,
			    grabCursor: true,
			    pagination: {
			      	el: '.swiper-pagination',
			      	clickable: true
			    }
			});
        }


        if ($testimonialTwo.cxExists()) {
            var testimonialTwo = new Swiper ($testimonialTwo, {
                loop: true,
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 30,
                grabCursor: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },

                // Responsive breakpoints
                breakpoints: {
                    992: {
                        slidesPerView: 2,
                        centeredSlides: false,
                    },
                    481: {
                        slidesPerView: 1,
                    }
                }
            });
        }
	};


    /************************************************************
        s15 - Client Carousel
    *************************************************************/

    CODEXIN.clientCarousel = function() {
    	if ($clients.cxExists()) {
  			var client = new Swiper ($clients, {
			    loop: true,
				slidesPerView: 5,
				spaceBetween: 30,
				centeredSlides: true,
			    grabCursor: true,
				autoplay: {
	    			delay: 3000
				},

                // Responsive breakpoints
                breakpoints: {
                    992: {
                        slidesPerView: 4,
                        centeredSlides: false,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    },
                    481: {
                        centeredSlides: false,
                        slidesPerView: 2,
                    }
                }
			})
  		}
	};


    /************************************************************
        s15 - Services Carousel
    *************************************************************/

    CODEXIN.servicesCarousel = function() {
        if ($services.cxExists()) {
            var service = new Swiper ($services, {
                loop: true,
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: true,
                grabCursor: true,

                navigation: {
                    nextEl: '.swiper-arrow.next',
                    prevEl: '.swiper-arrow.prev',
                },
                // autoplay: {
                //     delay: 3000
                // },

                // Responsive breakpoints
                breakpoints: {
                    992: {
                        slidesPerView: 2,
                        centeredSlides: false,
                    },
                    481: {
                        slidesPerView: 1,
                    }
                }
            })
        }
    };


    /************************************************************
        s15 - Team Carousel
    *************************************************************/

    CODEXIN.teamCarousel = function() {
        if ($team.cxExists()) {
            var people = new Swiper ($team, {
                loop: true,
                slidesPerView: 4,
                spaceBetween: 30,
                grabCursor: true,

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                // autoplay: {
                //     delay: 3000
                // },

                // Responsive breakpoints
                // breakpoints: {
                //     992: {
                //         slidesPerView: 2,
                //         centeredSlides: false,
                //     },
                //     481: {
                //         slidesPerView: 1,
                //     }
                // }
            })
        }
    };


    /************************************************************
        s16 - Smooth Scroll to anchor tags
    *************************************************************/

	CODEXIN.smoothScroll = function() {
        $('.explore').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            if( target.length ) {
                event.preventDefault ? event.preventDefault() : (event.returnValue = false);
                $('html, body').stop().animate({
                    scrollTop: target.offset().top + 30
                }, 1500, 'easeInOutQuint');
            }
        });
	};


    /************************************************************
        s17 - Scroll to Top JS
    *************************************************************/

    CODEXIN.scrollToTop = function() {
	    $window.on('scroll', function() {
	        if ($window.scrollTop() > 200) {
	            $toTop.fadeIn();
	        } else {
	            $toTop.fadeOut();
	        }
	    });

	    $toTop.on('click', function() {
	        $("html,body").animate({
	            scrollTop: 0
	        }, 800)
	    }); //scrollup finished
	};


    /************************************************************
        s18 - Placeholder JS
    *************************************************************/

    CODEXIN.placeHolders = function() {
        var input = document.createElement("input");
        if (('placeholder' in input) === false) {
            $('[placeholder]').on('focus', function() {
                var i = $(this);
                if (i.val() === i.attr('placeholder')) {
                    i.val('').removeClass('placeholder');
                    if (i.hasClass('password')) {
                        i.removeClass('password');
                        this.type = 'password';
                    }
                }
            }).on('blur', function() {
                var i = $(this);
                if (i.val() === '' || i.val() === i.attr('placeholder')) {
                    if (this.type === 'password') {
                        i.addClass('password');
                        this.type = 'text';
                    }
                    i.addClass('placeholder').val(i.attr('placeholder'));
                }
            }).blur().parents('form').on('submit', function() {
                $(this).find('[placeholder]').each(function() {
                    var i = $(this);
                    if (i.val() === i.attr('placeholder'))
                        i.val('');
                })
            });
        }
    };


    /************************************************************
        s19 - Parallax JS
    *************************************************************/

    CODEXIN.parallaxInit = function() {
    	if ( $window.width() > 768) {
	        $parallax.jarallax({
				speed: 0.6
			});

	        $parallaxSlow.jarallax({
				speed: 0.2
			});
	    }
    };


    /************************************************************
        s20 - Blog Grid Background Settings
    *************************************************************/

	CODEXIN.blogGridBgSetting = function() {
        if ($blogGrid.cxExists()) {
            $blogGrid.each(function() {
                var $this = $(this);
                var img = $this.find(".post-image img").attr("src");

                $this.find(".post-image").css({
                    backgroundImage: "url("+ img +")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                })
            });
        }
	};


    /************************************************************
        s21 - Tilt Settings
    *************************************************************/

	CODEXIN.tiltSetting = function() {
        if ($tiltEl.cxExists()) {
			$tiltEl.tilt({
				maxTilt:        18,
				perspective:    2200,
				easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
			});
        }
	};


    /************************************************************
        s22 - Animation Settings
    *************************************************************/

    CODEXIN.animationSetting = function() {
        if ( $window.width() > 991) {   
            window.sr = ScrollReveal({ reset: true, scale: 1 });
            sr.reveal('.animation-left', { origin: 'left', delay: 100 } );
            sr.reveal('.animation-right', { origin: 'right', delay: 150 } );
            sr.reveal('.animation-bottom', { origin: 'bottom', delay: 200 } );
            sr.reveal('.section-heading h4', { origin: 'left', delay: 100 } );
            sr.reveal('.section-heading h2', { origin: 'right', delay: 150 } );
            sr.reveal('.section-heading .subtitle', { origin: 'bottom', delay: 200 } );
            sr.reveal('.info-item', { origin: 'right' }, 100);
            sr.reveal('.info-item.boxed', { origin: 'bottom' }, 200);
            sr.reveal('.counter-item', { origin: 'right' }, 200);
            sr.reveal('.member-wrapper .team-member', { origin: 'bottom' }, 150);
            sr.reveal('.pricing-table', { origin: 'bottom' }, 200);
            sr.reveal('.blog-item-grid', { origin: 'bottom' }, 200);
            sr.reveal('.info-box-wrapper', { origin: 'bottom' }, 200);
            sr.reveal('.tab .nav-tabs li', { origin: 'right' }, 200);
        }
    };


    // Window load functions
    $window.on('load', function() {
        CODEXIN.preloader(),
        CODEXIN.primarySliderBgSetting(),
        CODEXIN.blogGridBgSetting(),
        CODEXIN.parallaxInit(),
        CODEXIN.portfolioIsotope();
    });

    // Document ready functions
    $document.on('ready', function() {
    	CODEXIN.primarySlider(),
    	// CODEXIN.fullscreenVideoHeader(),
    	// CODEXIN.backgroundSliderHeader(),
    	CODEXIN.mainNav(),
    	CODEXIN.headerAutoHide(),
    	CODEXIN.animatedCounter(),
        CODEXIN.responsiveMenu(),
    	CODEXIN.responsiveSubMenu(),
    	CODEXIN.simpleImageSlider(),
    	CODEXIN.testimonialCarousel(),
        CODEXIN.clientCarousel(),
        CODEXIN.servicesCarousel(),
    	CODEXIN.teamCarousel(),
        CODEXIN.smoothScroll(),
    	CODEXIN.skillBars(),
    	CODEXIN.scrollToTop(),
    	CODEXIN.tiltSetting(),
        CODEXIN.placeHolders(),
    	CODEXIN.animationSetting();
    });

    // Window load and resize functions
    $window.on('load resize', function() {
        // CODEXIN.fullscreenHeader(),
        CODEXIN.elementHeights();
    });

$("#modal-iframe").iziModal({
    headerColor: '#000',
    background: 'black',
    // title: 'iziModal with iframe',
    // subtitle: 'Video example using the Vimeo embed.',
    icon: 'icon-settings_system_daydream',
    overlayClose: true,
    iframe : true,
    iframeURL: 'https://www.youtube.com/embed/7e90gBu4pas?autoplay=1',
    fullscreen: true,
    openFullscreen: false,
    borderBottom: false
});


$(document).on('click', '.trigger-iframe', function (event) {
    event.preventDefault();
    $('#modal-iframe').iziModal('open', event);
});






})(jQuery);