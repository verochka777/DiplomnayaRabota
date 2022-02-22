import Swiper, { Navigation } from 'swiper';

const benefits = new Swiper('.benefits-swiper', {
	modules: [Navigation],
	navigation: {
		nextEl: '.benefits__arrow--right',
		prevEl: '.benefits__arrow--left',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 3,
		}
	}
});

const services = new Swiper('.services-swiper', {
	modules: [Navigation],
	navigation: {
		nextEl: '.services__arrow--right',
		prevEl: '.services__arrow--left',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 2,
		}
	}
});
