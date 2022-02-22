const overlay = document.querySelector('.overlay');

const services = document.querySelector('#services');
const servicesModal = document.querySelector('.services-modal');
const servicesClose = document.querySelector('.services-modal__close');

services.addEventListener('click', (e) => {
	if (e.target.closest('.service-button')) {
		servicesModal.classList.add('opened');
		overlay.classList.add('active');
	}
})

servicesClose.addEventListener('click', () => {
	servicesModal.classList.remove('opened');
	overlay.classList.remove('active');
})