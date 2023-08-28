const aboutSwiper = new Swiper('.about__slider', {
	loop: true,
	infinite: true,
	slidesPerView: 2.2,
	spaceBetween: 15,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},

	pagination: {
		el: ".about__slider-pagination",
		clickable: true,
	},
	breakpoints: {
		// when window width is <= 499px
		0: {
			slidesPerView: 1.5,
			spaceBetweenSlides: 5,
		},
		530: {
			slidesPerView: 2.3,
			dots: false,
			// spaceBetweenSlides: 50
		},
		768: {
			slidesPerView: 1.7,
			// spaceBetweenSlides: 50
		},
		// when window width is <= 999px
		992: {
			slidesPerView: 1.7,
			// spaceBetweenSlides: 50
		},
		1440: {},

	}

});

const portfolioSwiper = new Swiper('.portfolio__slider', {
	loop: true,
	slidesPerView: 1,
	infinite: true,
	spaceBetween: 15,
	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
	},
	// spaceBetween: 10,
	pagination: {
		el: ".portfolio__slider-pagination",
		clickable: true,
	},
});