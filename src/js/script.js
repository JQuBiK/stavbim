'use strict'

window.addEventListener('DOMContentLoaded', () => {
	
  	const searchPanel = document.querySelector('.search-panel'),
		  searchOpenBtn = document.querySelector('.header__search-basket-btn');

	searchOpenBtn.addEventListener('click', () => {
		searchPanel.classList.toggle('active');
  	});

  //Accrodions Functions

	const accordionParent = document.querySelectorAll('.accordion__wrapper');
		  

	accordionParent.forEach((item, index) => {
		const accordionBtn = document.querySelectorAll('.accordion__more-btn');

		accordionBtn[index].addEventListener('click', () => {
			accordionBtn[index].classList.toggle('active');
			item.classList.toggle('active');

			const accordionContent = document.querySelectorAll('.accordion__hidden');

			if (item.classList.contains('active')) {
				accordionContent[index].style.height = `${accordionContent[index].scrollHeight}px`;
				accordionBtn[index].textContent = 'Скрыть';
			} else {
				accordionContent[index].style.height = `0px`;
				accordionBtn[index].textContent = 'Показать еще';
			}
		});
	});

	//Basket

	const basketInputOnlinePay = document.querySelector('#online'),
		  basketInputCryptoPay = document.querySelector('#crypto'),
		  basketFormOnlinePay = document.querySelector('.basket__pay__choice__form__online'),
		  basketFormCryptoPay = document.querySelector('.basket__pay__choice__form__crypto'),
		  basketOpenPopapBtn = document.querySelector('#basket'),
		  basketClosePopapBtn = document.querySelector('.basket__title__wrapper span'),
		  basketPopap = document.querySelector('.basket');

	basketOpenPopapBtn.addEventListener('click', () => {
		basketPopap.classList.toggle('active');
	});

	basketClosePopapBtn.addEventListener('click', () => {
		basketPopap.classList.remove('active');
	});


	basketInputOnlinePay.addEventListener('change', (e) => {
		basketFormOnlinePay.classList.add('active');
		basketFormCryptoPay.classList.remove('active');
	});

	basketInputCryptoPay.addEventListener('change', (e) => {
		basketFormOnlinePay.classList.remove('active');
		basketFormCryptoPay.classList.add('active');
	});

	//slider Brands
	$('.brands__slider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		variableWidth: true,
		arrows: false,
		dotsClass: 'slick-dots brands__dots',
	});
	//Slider Works
	$('.works__slider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		variableWidth: true,
		arrows: false,
		dotsClass: 'slick-dots works__dots',
	});
});