/******************************

INDEX:

    s00 - Predefined Variables
    s01 - Preloader
    s01 - Tooltips
    s01 - Social Share
    s02 - Primary Slider Settings
    s03 - Image Background Settings
    s04 - Full Screen Header
    s05 - Header Background Video
    s06 - Header Background Slider
    s07 - Main Navigation Menu
    s08 - Skill Bars
    s09 - Accordion Class
    s12 - Slide left action for Mobile Menu
    s13 - Simple Image Slider
    s13 - Image Carousel
    s14 - Tabbed Carousel
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
    s21 - Typed js Settings
    s21 - Pie Chart Settings
    s21 - Flip Settings
    s22 - Animation Settings


******************************/

(function($) {

    "use strict";

    // Declaring main variable
    var CODEXIN = {};


    /************************************************************
        s00 - Predefined Variables
    *************************************************************/

    var $window             = $(window),
        $document           = $(document),
        $socialShare        = $('[data-toggle="popover"]'),
        $slider             = $("#primary-slider"),
        $vslider            = $("#primary-slider-with-video"),
        $pslider            = $("#primary-slider-with-particle"),
        // $fullscreen         = $(".sp-slide"),
        // $fullscreenVideo    = $("#header_full_screen_video"),
        $parallax           = $(".jarallax-default"),
        $parallaxSlow       = $(".jarallax-slow"),
        $bgImage            = $(".bg-img-wrapper"),
        $bgSlide            = $("#header_bg_slide"),
        $mainMenu           = $(".stellarnav"),
        $pageloader         = $(".animsition"),
        $intelHeader        = $(".intelligent-header"),
        $footer             = $("#colophon"),
        $counter            = $(".counter"),
        $isoContainer       = $(".portfolio-wrapper"),
        $isoFilter          = $(".portfolio-filter li"),
        $accordionEl        = $(".accordion-toggle"),
        $simpleSlider       = $(".simple-slider-container"),
        $imageCarousel      = $(".image-carousel-full-width"),
        $tabbedCarousel     = $(".service-tabs"),
        $testimonial        = $(".testimonial-container"),
        $testimonialTwo     = $(".testimonial-container-type-2"),
        $testimonialThree   = $(".testimonial-with-thumbs"),
        $testimonialWidget  = $(".testimonial-widget.swiper-container"),
        // $slickNav           = $(".testimonial-nav"),
        // $slickThree         = $(".testimonial-carousel-type-02"),
        $clients            = $(".client-carousel"),
        $services           = $(".services-carousel"),
        $team               = $(".team-carousel"),
        $skillBar           = $(".skillbar"),
        $toTop              = $("#toTop"),
        $blogGrid           = $(".blog-item-grid"),
        $tiltEl             = $(".tilt-element"),
        $typedEl            = $(".typed-element"),
        $pieChart           = $(".pie-chart"),
        $pieChart2          = $(".pie-chart-type-2"),
        $flipEl             = $(".flip-card");

    // Check if element exists
    $.fn.cxExists = function() {
        return this.length > 0;
    };


    /************************************************************
        s01 - Preloader
    *************************************************************/

    CODEXIN.preloader = function() {
        $pageloader.animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 800,
            outDuration: 600,
            linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"]):not(.img)',
            loading: true,
            loadingParentElement: 'body',
            loadingClass: 'cx-progress',
            loadingInner: '<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>',
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: [ 'animation-duration', '-webkit-animation-duration'],
            overlay : false,
            overlayClass : 'animsition-overlay-slide',
            overlayParentElement : 'body',
            transition: function(url){ window.location.href = url; }
        });
    };


    /************************************************************
        s01 - Tooltips
    *************************************************************/

    CODEXIN.toolTips = function() {
        $('body').tooltip( {selector: '[data-toggle=tooltip]'} );
    };


    /************************************************************
        s01 - Social Share
    *************************************************************/

    CODEXIN.socialShares = function() {
        $socialShare.each(function() {
            $(this).popover({
                html : true,
                container : '#social-share-btn',
                content: function() {
                    return $('#share-hidden-content').html();
                },
                template: '<div class="popover" role="tooltip"><div class="popover-content"></div></div>'
            });
        });

        $("#share-hidden-content a.share-twitter").attr("href", "https://twitter.com/home?status=" + window.location.href);
        $("#share-hidden-content a.share-facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href);
        $("#share-hidden-content a.share-google-plus").attr("href", "https://plus.google.com/share?url=" + window.location.href);
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
                arrows: false,
                visibleSize: 'auto',
                buttons: true,
                waitForLayers: true,
                slideDistance: 0,
                forceSize: 'fullWindow',
                autoplay: false,
                fade: true,
                reachVideoAction: 'playVideo',
                breakpoints: {
                    991: {
                        height: 500,
                        forceSize: 'none',
                    },
                    768: {
                        arrows: false
                    }
                }
            });
            $(".sp-slide").append('<div class="video-section-overlay"></div>');
        }

        if ($pslider.cxExists()) {
            $pslider.sliderPro({
                width: '100%',
                height: '600px',
                arrows: false,
                buttons: false,
                touchSwipe: false,
            });
            $(".sp-slide").append('<div class="particle-section-overlay"></div>');
        }
    };


    /************************************************************
        s03 - Image Background Settings
    *************************************************************/

    CODEXIN.imageBgSettings = function() {
        if ($slider.cxExists() || $pslider.cxExists() || $bgImage.cxExists()) {
            $(".sp-slide, .bg-img-wrapper").each(function() {
                var $this = $(this);
                var img = $this.find("img.visually-hidden").attr("src");

                $this.find(".image-placeholder").css({
                    backgroundImage: "url(" + img + ")",
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
        if ($window.width() > 991) {
            $fullscreen.css("height", window.innerHeight);
        } else {
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
            ], {
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
            theme: 'plain',
            breakpoint: 768,
            phoneBtn: '+1234567890',
            position: 'right',
            showArrows: true,
            closeBtn: false,
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
            if ($window.width() > 767) {
                $("#whole").css('margin-bottom', footerHeight);
            }
        }
    };


    /************************************************************
        s09 - Accordion Class
    *************************************************************/

    CODEXIN.accordionClass = function() {
        $accordionEl.on('click', function(){
            $(this).closest('.panel-group').children().each(function(){
                $(this).find('>.panel-heading').removeClass('active');
                });

            $(this).closest('.panel-heading').toggleClass('active');
        });
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
            $counter.each(function() {
                var $elem = $(this);
                $elem.appear(function() {
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
                    stagger: 60,
                    percentPosition: true
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
            $(".portfolio").on('click', function(e) {
                $(this).find("a.clickable").first().click();
            });

            $(".portfolio a.clickable").on('click', function(e) {
                e.stopPropagation();
            });

        }
    };


    /************************************************************
        s08 - Skill Bars
    *************************************************************/

    CODEXIN.skillBars = function() {
        if ($skillBar.cxExists()) {
            $skillBar.each(function() {
                var $elem = $(this);
                $elem.appear(function() {
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
            var pushBtnLeft = document.querySelector("#c-button--push-left");
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
            var pushBtnRight = document.querySelector("#c-button--push-right");
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
            var imageSlider = new Swiper($simpleSlider, {
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
                },
                navigation: {
                    nextEl: '.arrow-right',
                    prevEl: '.arrow-left',
                },
            })
        }
    };


    /************************************************************
        s13 - Simple Image Carousel
    *************************************************************/

    CODEXIN.simpleImageCarousel = function() {
        if ($imageCarousel.cxExists()) {
            var imageSlider = new Swiper($imageCarousel, {
                loop: true,
                effect: "slide",
                speed: 1000,
                slidesPerView: 5,
                centeredSlides : true,
                grabCursor: true,
                roundLengths: true,
                autoplay: {
                    delay: 3000
                },

                // Responsive breakpoints
                breakpoints: {
                    992: {
                        slidesPerView: 3,
                    },
                    769: {
                        slidesPerView: 2,
                        centeredSlides : false,
                    },
                    481: {
                        slidesPerView: 1,
                    }
                }
            })
        }
    };


    /************************************************************
        s13 - Simple Image Slider
    *************************************************************/

    CODEXIN.tabbledSlider = function() {
        if ($tabbedCarousel.cxExists()) {

            function setCurrentSlide(ele,index){
                $(".nav-swiper .swiper-slide").removeClass("selected");
                ele.addClass("selected");
            }

            var navSwiper = new Swiper('.nav-swiper', {
                slidesPerView: 6,
                paginationClickable: true,
                freeMode: true,
                loop: false,
                simulateTouch: false
            });

            navSwiper.slides.each(function(index,val){
                var ele = $(this);
                ele.on("click",function(){
                    setCurrentSlide(ele,index);
                    swiperContent.slideTo(index, 1000, false);
                });
            });

            var swiperContent = new Swiper ('.swiper-content', {
                direction: 'horizontal',
                loop: false,
                autoHeight: true,
                simulateTouch: false
            });
        }
    };


    /************************************************************
        s14 - Testimonial Carousel
    *************************************************************/

    CODEXIN.testimonialCarousel = function() {
        if ($testimonial.cxExists()) {
            var testimonial = new Swiper($testimonial, {
                loop: true,
                spaceBetween: 40,
                grabCursor: true,
                parallax: true,
                speed: 700,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },

                navigation: {
                    nextEl: '.arrow-right',
                    prevEl: '.arrow-left',
                },
            });
        }


        if ($testimonialTwo.cxExists()) {
            var testimonialTwo = new Swiper($testimonialTwo, {
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

        if ($testimonialThree.cxExists()) {
            // Params
            var mainSliderSelector = '.main-slider',
                navSliderSelector = '.nav-slider';

            // Main Slider
            var mainSliderOptions = {
                    loop: true,
                    speed:1000,
                    loopAdditionalSlides: 10,
                    grabCursor: true,
                    parallax: true,
                    watchSlidesProgress: true,
                    navigation: {
                        nextEl: '.arrow-right',
                        prevEl: '.arrow-left',
                    },
                };
            var mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

            // Navigation Slider
            var navSliderOptions = {
                    loop: true,
                    loopAdditionalSlides: 10,
                    speed:1000,
                    slidesPerView: 5,
                    centeredSlides : true,
                    spaceBetween: 20,
                    touchRatio: 0.2,
                    slideToClickedSlide: true,
                    // Responsive breakpoints
                    breakpoints: {
                        992: {
                            slidesPerView: 3,
                            centeredSlides : true
                        },
                        768: {
                            slidesPerView: 1,
                            centeredSlides : true
                        }
                    }

                };
            var navSlider = new Swiper(navSliderSelector, navSliderOptions);

            // Matching sliders
            mainSlider.controller.control = navSlider;
            navSlider.controller.control = mainSlider;

            // Overlay
            $(".nav-slider .swiper-slide").append('<div class="thumb-overlay"></div>');
        }


        if ($testimonialWidget.cxExists()) {
            var testimonialWidget = new Swiper($testimonialWidget, {
                loop: true,
                effect: "slide",
                slidesPerView: 1,
                spaceBetween: 30,
                grabCursor: true,
            });
        }
    };


    /************************************************************
        s15 - Client Carousel
    *************************************************************/

    CODEXIN.clientCarousel = function() {
        if ($clients.cxExists()) {
            var client = new Swiper($clients, {
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
            var service = new Swiper($services, {
                loop: true,
                slidesPerView: 3,
                spaceBetween: 30,
                // centeredSlides: true,
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
            var people = new Swiper($team, {
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
            if (target.length) {
                event.preventDefault ? event.preventDefault() : (event.returnValue = false);
                $('html, body').stop().animate({
                    scrollTop: target.offset().top + 30
                }, 1500, 'easeInOutExpo');
            }
        });
    };


    /************************************************************
        s17 - Scroll to Top JS
    *************************************************************/

    CODEXIN.scrollToTop = function() {
        $toTop.hide();
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
            }, 1500, 'easeInOutExpo')
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
        if ($window.width() > 768) {
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
                var img = $this.find(".post-media img").attr("src");

                $this.find(".post-media").css({
                    backgroundImage: "url(" + img + ")",
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
                maxTilt: 15,
                perspective: 1140,
                easing: "cubic-bezier(.2,1,.22,1)", // Easing on enter/exit.
            });
        }
    };


    /************************************************************
        s21 - Typed js Settings
    *************************************************************/

    CODEXIN.typedSetting = function() {
        if ($typedEl.cxExists()) {

            $typedEl.each(function() {
                var $this = $(this);
                var typedStrings = $this.attr("data-typed-strings") ? $this.attr("data-typed-strings").split(",") : [];

                $this = new Typed(".typed-element", {
                    strings: typedStrings,
                    typeSpeed: 100,
                    startDelay: 100,
                    backSpeed: 30,
                    backDelay: 500,
                    loop: true,
                    loopCount: Infinity,
                    showCursor: true,
                    cursorChar: "|",
                    attr: null,
                    contentType: 'html',
                });
            })
        }
    };


    /************************************************************
        s21 - Pie Chart Settings
    *************************************************************/

    CODEXIN.pieChartSetting = function() {
        if ($pieChart.cxExists()) {
            $pieChart.each(function() {
                var $elem = $(this);
                $elem.appear(function() {
                    $elem.easyPieChart({
                        easing: 'cubic-bezier(.2,1,.22,1)',
                        scaleColor: false,
                        animate: ({ duration: 2000, enabled: true }),
                        lineWidth: 24,
                        trackWidth: 16,
                        trackColor: "#c6e7e5",
                        lineCap: 'butt',
                        barColor: function(percent) {
                            var ctx = this.renderer.getCtx();
                            var canvas = this.renderer.getCanvas();
                            var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
                                gradient.addColorStop(0, "#d7706d");
                                gradient.addColorStop(1, "#947cb0");
                            return gradient;
                        },
                        onStep: function(from, to, percent) {
                            $(this.el).find('.pie-percent').text(Math.round(percent));
                        }
                    });
                });
            });

        }

        if ($pieChart2.cxExists()) {

            $pieChart2.each(function() {
                var $elem = $(this);
                $elem.appear(function() {
                    $elem.easyPieChart({
                        easing: 'cubic-bezier(.2,1,.22,1)',
                        scaleColor: false,
                        animate: ({ duration: 2000, enabled: true }),
                        lineWidth: 5,
                        trackWidth: 5,
                        trackColor: "transparent",
                        lineCap: 'butt',
                        barColor: '#947cb0',
                        onStep: function(from, to, percent) {
                            $(this.el).find('.pie-percent').text(Math.round(percent));
                        }
                    });
                });
            });
        }
    };


    /************************************************************
        s21 - Flip Settings
    *************************************************************/

    CODEXIN.flipSetting = function() {
        if ($flipEl.cxExists()) {
            $flipEl.flip({
                axis: 'y',
                trigger: 'hover',
                reverse: true
            });
        }
    };

    /************************************************************
        s22 - Animation Settings
    *************************************************************/

    CODEXIN.animationSetting = function() {
        if ($window.width() > 991) {
            window.sr = ScrollReveal({ scale: 1 });
            sr.reveal('.animation-left', { origin: 'left', delay: 100 });
            sr.reveal('.animation-right', { origin: 'right', delay: 150 });
            sr.reveal('.animation-bottom', { origin: 'bottom', delay: 200 });
            sr.reveal('.section-heading:not(.no-animation) h4', { origin: 'left', delay: 100 });
            sr.reveal('.section-heading:not(.no-animation) h2', { origin: 'right', delay: 150 });
            sr.reveal('.section-heading:not(.no-animation) .subtitle', { origin: 'bottom', delay: 200 });
            sr.reveal('.page-title-heading', { origin: 'bottom', delay: 400 });
            sr.reveal('.page-subtitle', { origin: 'bottom', delay: 600 });
            sr.reveal('.breadcrumb-container', { origin: 'bottom', delay: 800 });
            sr.reveal('.info-item:not(.no-animation)', { origin: 'right' }, 100);
            sr.reveal('.info-item.boxed', { origin: 'bottom' }, 200);
            sr.reveal('.counter-item', { origin: 'right' }, 200);
            sr.reveal('.feature-box:not(.no-animation)', { origin: 'right' }, 200);
            sr.reveal('.member-wrapper .team-member', { origin: 'bottom' }, 150);
            sr.reveal('.pricing-table, .pricing-table-type-2', { origin: 'bottom' }, 200);
            sr.reveal('.blog-item-grid, .blog-grid', { origin: 'bottom' }, 200);
            sr.reveal('.info-box-wrapper', { origin: 'bottom' }, 200);
            sr.reveal('.tab .nav-tabs:not(.no-animation) li', { origin: 'right' }, 200);
        }
    };


    // Window load functions
    $window.on('load', function() {
        CODEXIN.primarySlider(),
        CODEXIN.imageBgSettings(),
        CODEXIN.blogGridBgSetting(),
        CODEXIN.parallaxInit(),
        CODEXIN.typedSetting(),
        CODEXIN.tabbledSlider(),
        CODEXIN.skillBars(),
        CODEXIN.portfolioIsotope();
    });

    // Document ready functions
    $document.on('ready', function() {
        CODEXIN.preloader(),
        CODEXIN.toolTips(),
        CODEXIN.socialShares(),
        CODEXIN.mainNav(),
        CODEXIN.headerAutoHide(),
        CODEXIN.animatedCounter(),
        CODEXIN.responsiveMenu(),
        CODEXIN.responsiveSubMenu(),
        CODEXIN.simpleImageSlider(),
        CODEXIN.simpleImageCarousel(),
        CODEXIN.testimonialCarousel(),
        CODEXIN.clientCarousel(),
        CODEXIN.servicesCarousel(),
        CODEXIN.teamCarousel(),
        CODEXIN.smoothScroll(),
        CODEXIN.accordionClass(),
        CODEXIN.pieChartSetting(),
        CODEXIN.scrollToTop(),
        CODEXIN.tiltSetting(),
        CODEXIN.flipSetting(),
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
        iframe: true,
        iframeURL: 'https://www.youtube.com/embed/7e90gBu4pas?autoplay=1',
        fullscreen: true,
        openFullscreen: false,
        borderBottom: false
    });


    $(document).on('click', '.trigger-iframe', function(event) {
        event.preventDefault();
        $('#modal-iframe').iziModal('open', event);
    });





})(jQuery);