// mask phone
$('[name="phone"]').mask('+7 (999) 999-99-99');
// mask phone end

// sliders
$('.home-slider').slick({
	slidesToShow: 1,
	dots: true,
	arrows: true,
	fade: true,
	appendArrows: '.home-slider__nav',
	appendDots: '.home-slider__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.product-card-slider').slick({
	slidesToShow: 1,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.product-gallery1').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	swipe: false,
});

$('.product-gallery-preview1').slick({
	slidesToShow: 4,
	focusOnSelect: true,
	asNavFor: '.product-gallery1',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
			}
		}
	]
});

$('.product-gallery2').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	swipe: false,
});

$('.product-gallery-preview2').slick({
	slidesToShow: 5,
	vertical: true,
	focusOnSelect: true,
	asNavFor: '.product-gallery2',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				vertical: true,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				vertical: false,
			}
		}
	]
});

$('.recommended-products-slider1').slick({
	slidesToShow: 3,
	appendArrows: '.recommended-products-slider__nav1',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.recommended-products-slider2').slick({
	slidesToShow: 4,
	appendArrows: '.recommended-products-slider__nav2',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.clients-slider1').slick({
	slidesToShow: 6,
	slidesToScroll: 3,
	arrows: true,
	dots: true,
	appendArrows: '.clients-slider__nav1',
	appendDots: '.clients-slider__nav1',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 420,
			settings: {
				slidesToShow: 2,
			}
		}
	]
});

$('.clients-slider2').slick({
	slidesToShow: 4,
	arrows: true,
	appendArrows: '.clients-slider__nav2',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
			}
		}
	]
});

$('.video-reviews-slider1').slick({
	slidesToShow: 3,
	arrows: true,
	dots: true,
	infinite: false,
	appendArrows: '.video-reviews-slider__nav1',
	appendDots: '.video-reviews-slider__nav1',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.video-reviews-slider2').slick({
	slidesToShow: 2,
	arrows: true,
	infinite: false,
	appendArrows: '.video-reviews-slider__nav2',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		// {
		// 	breakpoint: 992,
		// 	settings: {
		// 		slidesToShow: 2,
		// 	}
		// },
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.certificates-slider1').slick({
	slidesToShow: 5,
	arrows: true,
	dots: true,
	infinite: false,
	appendArrows: '.certificates-slider__nav1',
	appendDots: '.certificates-slider__nav1',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 420,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.certificates-slider2').slick({
	slidesToShow: 1,
	arrows: true,
	infinite: false,
	variableWidth: true,
	appendArrows: '.certificates-slider__nav2',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	// responsive: [
	// 	{
	// 		breakpoint: 992,
	// 		settings: {
	// 			slidesToShow: 4,
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 768,
	// 		settings: {
	// 			slidesToShow: 3,
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 576,
	// 		settings: {
	// 			slidesToShow: 2,
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 420,
	// 		settings: {
	// 			slidesToShow: 1,
	// 		}
	// 	}
	// ]
});

$('.works-slider-gallery').slick({
	slidesToShow: 1,
	arrows: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.works-slider1').slick({
	slidesToShow: 1,
	arrows: true,
	dots: true,
	appendArrows: '.works-slider__nav1',
	appendDots: '.works-slider__nav1',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.works-slider2').slick({
	slidesToShow: 3,
	arrows: true,
	infinite: false,
	appendArrows: '.works-slider__nav2',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.reviews-slider1').slick({
	slidesToShow: 3,
	appendArrows: '.reviews-slider__nav1',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.employee-slider1').slick({
	slidesToShow: 4,
	appendArrows: '.employee-slider__nav1',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});
// slider end

// slider range
$(".slider-range-1").slider({
	min: 0,
	max: 20,
	value: 3,
	range: "min",
	animate: "fast",
	slide: function (event, ui) {
		$(".slider-range-1 span").html("<span class='slider-range__value'>" + ui.value + "</span>");
	}
});
$(".slider-range-1 span").html("<span class='slider-range__value'>" + $(".slider-range-1").slider("value") + "</span>"); 

$(".slider-range-2").slider({
	min: 0,
	max: 20,
	value: 8,
	range: "min",
	animate: "fast",
	slide: function (event, ui) {
		$(".slider-range-2 span").html("<span class='slider-range__value'>" + ui.value + "</span>");
	}
});
$(".slider-range-2 span").html("<span class='slider-range__value'>" + $(".slider-range-2").slider("value") + "</span>"); 
// slider range end

// mobile menu
$('.btn-burger').on('click', function () {
	$('.mobile-menu').fadeToggle();
});

$('.mobile-menu__close').on('click', function () {
	$('.mobile-menu').fadeOut();
});

$('.btn-edit-location').on('click', function (e) {
	e.preventDefault();
	$('.dropdown-menu-hidden').fadeIn();
	$('.dropdown-menu-visible').fadeOut();
});

$('.category-list-col-btn').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $(this).parent('.category-list');


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.find('.category-list-all').html('Свернуть');

		content.find('.category-list-col:hidden').slideDown();
	} else {
		$this.removeClass('trigger');
		$this.find('.category-list-all').html('Показать все');

		content.find('.category-list-col').slice(4).slideUp();
	}
});

$('.btn-sidebar').on('click', function (e) {
	e.preventDefault();
	$('.sidebar').fadeToggle();
});

$('.sidebar-close').on('click', function (e) {
	e.preventDefault();
	$('.sidebar').fadeOut();
});

// animate scroll
$('.go_to').click(function (e) {
	e.preventDefault();
	var scroll_el = $(this).attr('href');
	if ($(scroll_el).length !== 0) {
		$('html, body').animate({
			scrollTop: $(scroll_el).offset().top
		}, 500);
	}
	return false;
});

$('.accordion-item-v2').each(function () {
	if ($(this).find('.accordion-button').hasClass('collapsed')) {
		$(this).removeClass('open');
	} else {
		$(this).addClass('open');
	}
});

$('.accordion-item-v2').click(function () {
	$('.accordion-item-v2').removeClass('open');
	$(this).addClass('open');
	if ($(this).find('.accordion-button').hasClass('collapsed')) {
		$(this).removeClass('open');
	} else {
		$(this).addClass('open');
	}
});