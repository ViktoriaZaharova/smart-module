$('[name="phone"]').mask('+7 (999) 999-99-99');

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

// mobile menu
$('.btn-burger').on('click', function () {
	$('.mobile-menu').fadeToggle();
});

$('.mobile-menu__close').on('click', function () {
	$('.mobile-menu').fadeOut();
});

