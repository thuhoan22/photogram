;
(function (win, $) {
  'use strict';

  // get background image------------------
  $('.js-bg').each(function () {
    if ($(this).attr('data-bg')) $(this).css('background-image', 'url(' + $(this).data('bg') + ')');
  });

  // loader------------------
  var loaderPage = function () {
    $('.loader-wrap .loader-item').addClass('is-show');

    TweenMax.to('.ld-mask', 1.7, {
      xPercent: 100,
      repeat: 0,
      yoyo: false,
      repeatDelay: 0.5,
      ease: Linear.easeNone,
      onComplete: function () {
        $('.loader-wrap .loader-item , .loader-logo img').addClass('ld-img');
        $('.loader-wrap').delay(500).fadeOut(1300);
      }
    });
  };

  // header------------------
  var openNavMenu = function () {
    $('.nav-btn').on('click', function () {
      $(".main-menu").toggleClass("vismobmenu");
      $(".sb-overlay").fadeToggle(400);
    });
  };

  var openSidebar = function () {
    var $clickClose = $('.dimmed , .sidebar-wrap .clode-btn'),
      $sidebarBox = $('.sidebar-wrap .box');

    function showSidebar() {
      if ($(window).width() > 1024) {
        $('.dimmed').fadeIn(500);
      }
      $('.sidebar-wrap').addClass('is-open');
      $('.sidebar-btn').addClass('is-open');

      setTimeout(function () {
        $sidebarBox.each(function (e) {
          var $this = $(this);

          setTimeout(function () {
            TweenMax.to($this, 0.9, {
              force3D: true,
              y: '0',
              opacity: '1',
              ease: Power2.easeOut
            });
          }, 110 * e);
        });
      }, 500);
    };

    function hideSidebar() {
      $('.sidebar-wrap').removeClass('is-open');
      $('.sidebar-btn').removeClass('is-open');

      setTimeout(function () {
        TweenMax.to($sidebarBox, 0.9, {
          force3D: true,
          y: '50px',
          opacity: '0',
          ease: Power2.easeOut
        });
      }, 300);

      $('.dimmed').fadeOut(500);
    };

    $('.sidebar-btn').on('click', function () {
      if ($(this).hasClass('is-open')) hideSidebar();
      else showSidebar();
    });

    $clickClose.on('click', function () {
      hideSidebar();
    });
  };

  // carousel swiper------------------
  var carouselSwiper = function () {
    if ($('.slider-carousel').length > 0) {
      var swiperCarousel = new Swiper('.slider-carousel .slide-photo', {
        preloadImages: true,
        slidesPerView: 'auto',
        freeMode: false,
        spaceBetween: 30,
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        mousewheel: true,
        centeredSlides: false,
        autoHeight: false,
        speed: 1400,
        pagination: {
          el: '.control-pagination',
          clickable: true,
        },
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
        on: {
          init: function () {
            var totalSlidesMain = $('.slider .swiper-slide:not(.swiper-slide-duplicate) img').length;
            $('.control-carousel .total').html('0' + totalSlidesMain);
          }
        }
      });

      swiperCarousel.on('slideChange', function () {
        var idxNumber = swiperCarousel.realIndex + 1,
          currentNumber = $('.control-carousel .current');

        currentNumber.html('0' + idxNumber);
      });
    }
  };

  // carousel2 swiper------------------
  var carousel2Swiper = function () {
    if ($('.slider-carousel2').length > 0) {
      var swiperCarousel2 = new Swiper('.slider-carousel2 .slide-photo', {
        preloadImages: false,
        loop: true,
        centeredSlides: true,
        freeMode: false,
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true,
        mousewheel: true,
        parallax: true,
        speed: 1400,
        effect: 'slide',
        pagination: {
          el: '.control-pagination',
          clickable: true,
        },
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }
      });

      var totalSlides = $('.slider-carousel2 .swiper-slide:not(.swiper-slide-duplicate) .bg').length;
      $('.swiper-counter .total-num').html('0' + totalSlides);
      swiperCarousel2.on('slideChange', function () {
        var idxNumber = swiperCarousel2.realIndex + 1,
          currentNumber = $('.swiper-counter .current-num');
        currentNumber.html('0' + idxNumber);
      });
      swiperCarousel2.on('slideChangeTransitionStart', function () {
        $('.aside-control .progress').css({
          height: 0,
          transition: "height 0s"
        });
      });
      swiperCarousel2.on('slideChangeTransitionEnd', function () {
        $('.aside-control .progress').css({
          height: '100%',
          transition: 'height 2000ms'
        });
      });
    }
  };

  // sliders------------------
  var sliderSwiper = function () {
    if ($('.slider-single').length > 0) {
      var sliderSingle = new Swiper('.slider-single .slide-photo', {
        preloadImages: false,
        loop: true,
        grabCursor: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        speed: 1400,
        spaceBetween: 0,
        effect: 'slide',
        mousewheel: true,
        parallax: true,
        pagination: {
          el: '.control-pagination',
          clickable: true,
        },
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
      });

      var totalSlides = $('.slider-single  .swiper-slide:not(.swiper-slide-duplicate) .bg').length;
      $('.swiper-counter .total-num').html('0' + totalSlides);
      sliderSingle.on('slideChange', function () {
        var idxNumber = sliderSingle.realIndex + 1,
          currentNumber = $('.swiper-counter .current-num');

        currentNumber.html('0' + idxNumber);
      });

      sliderSingle.on('slideChangeTransitionStart', function () {
        $('.aside-control .progress').css({
          height: 0,
          transition: 'height 0s'
        });
      });

      sliderSingle.on('slideChangeTransitionEnd', function () {
        $('.aside-control .progress').css({
          height: '100%',
          transition: 'height 2000ms'
        });
      });
    };
  };

  // image grid------------------
  var gridSwiper = function () {
    if ($('.grid-top').length > 0) {
      var gridTopSwp = new Swiper('.swiper.grid-top', {
        grabCursor: true,
        autoHeight: false,
        centeredSlides: false,
        slidesPerView: 'auto',
        spaceBetween: 10,
        speed: 14000,
        freeMode: true,
        disableOnInteraction: true,
        autoplay: {
          delay: 0.1,
        },
        loop: true,
      });
    };

    if ($('.grid-bottom').length > 0) {
      var gridBottomSwp = new Swiper('.swiper.grid-bottom', {
        grabCursor: true,
        autoHeight: false,
        centeredSlides: false,
        slidesPerView: 'auto',
        spaceBetween: 10,
        speed: 26000,
        freeMode: true,
        disableOnInteraction: true,
        autoplay: {
          delay: 1,
          reverseDirection: true
        },
        loop: true,
      });
    };
  };

  // lightGallery------------------
  var slideLightGallery = function () {
    var $gallery = $('.lightgallery'),
      dataGallery = $gallery.data('looped');

    $gallery.lightGallery({
      selector: '.lightgallery a.popup-image',
      cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
      download: false,
      loop: dataGallery,
      counter: false
    });
  };

  var calHeightItem = function () {
    $('.slider .item-slide').css({
      height: $('.slider').outerHeight(true)
    });
    // $(".fslider-fw-item").css({
    //     height: $(".slider-fw").outerHeight(true)
    // });
    // $(".first-slide_wrap").css({
    //     height: $('.slider').outerHeight(true)
    // });
    // $(".height-emulator").css({
    //     height: $(".main-footer").outerHeight(true)
    // });
  };

  // share------------------
  var showHideShare = function () {
    var $btnShare = $('.share-btn');

    $btnShare.on('click', function (e) {
      e.preventDefault();

      if ($btnShare.hasClass('is-open')) hideShare()
      else showShare();
    });

    function hideShare() {
      $btnShare.removeClass('is-open');

      setTimeout(function () {
        $('.share-list').removeClass('is-open');
      }, 400);

      $('.share-list .share-item').each(function (e) {
        var $this = $(this);

        setTimeout(function () {
          $this.animate({
            opacity: 0
          }, 400);
        }, 80 * e);
      });
    };

    function showShare() {
      $btnShare.addClass('is-open');
      $('.share-list').addClass('is-open');

      setTimeout(function () {
        $('.share-list .share-item').each(function (e) {
          var $this = $(this);

          setTimeout(function () {
            $this.animate({
              opacity: 1
            }, 400);
          }, 80 * e);
        });
      }, 400);
    };
  };

  // video------------------
  var videoBox = function () {
    if ($('.video-area').length > 0) {
      function videoint() {
        var bvmc = $('.video'),
          vch = $('.bg-video');

        $('.video-area').height(bvmc.height());

        if ($(window).width() > 1024) {
          if ($('.video-area').length > 0) {
            if (bvmc.height() / 9 * 16 > bvmc.width()) {} else {

            }
          }
        } else if ($(window).width() < 760) {
          $('.video-area').height(bvmc.height());
          bvfc.height(bvmc.height());
        } else {
          $('.video-area').height(bvmc.height());
          bvfc.height(bvmc.height());
        }
        vch.css("width", $(window).width() + "px");
        vch.css("height", Number(720 / 1280 * $(window).width()) + "px");
        if (vch.height() < $(window).height()) {
          vch.css("height", $(window).height() + "px");
          vch.css("width", Number(1280 / 720 * $(window).height()) + "px");
        }
      }

      videoint();
    }
  };

  $(function () {

  });

  $(win).on('load', function () {
    loaderPage();
    slideLightGallery();
    calHeightItem();
    showHideShare();
    openSidebar();
    carouselSwiper();
    carousel2Swiper();
    sliderSwiper();
    gridSwiper();
    videoBox();
  });
})(window, window.jQuery);
