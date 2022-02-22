const overlay = document.querySelector('.overlay');

const callback = document.querySelector('.callback-open');
const headerModal = document.querySelector('.header-modal');
const headerClose = document.querySelector('.header-modal__close');

callback.addEventListener('click', () => {
	headerModal.classList.add('opened');
	overlay.classList.add('active');
})

headerClose.addEventListener('click', () => {
	headerModal.classList.remove('opened');
	overlay.classList.remove('active');
})