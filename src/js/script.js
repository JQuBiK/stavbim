'use strict';

window.addEventListener('DOMContentLoaded', () => {
	
  	const searchPanel = document.querySelector('.search-panel'),
		  searchOpenBtn = document.querySelector('.header__search-basket-btn');

	searchOpenBtn.addEventListener('click', () => {
		searchPanel.classList.toggle('active');
  	});

  
	//Basket

	const basketInputOnlinePay = document.querySelector('#online'),
		  basketInputCryptoPay = document.querySelector('#crypto'),
		  basketFormOnlinePay = document.querySelector('.basket__pay__choice__form__online'),
		  basketFormCryptoPay = document.querySelector('.basket__pay__choice__form__crypto'),
		  basketOpenPopupBtn = document.querySelector('#basket'),
		  basketClosePopupBtn = document.querySelector('.basket__title__wrapper span'),
		  basketPopup = document.querySelector('.basket'),
		  basketPopupParent = document.querySelector('.basket__list__scroll'),
		  basketPopupItem = document.querySelectorAll('.basket__item'),
		  basketPrice = document.querySelector('.basket__pay__sum');

	basketOpenPopupBtn.addEventListener('click', () => {
		basketPopup.classList.toggle('active');
	});

	basketClosePopupBtn.addEventListener('click', () => {
		basketPopup.classList.remove('active');
	});


	basketInputOnlinePay.addEventListener('change', (e) => {
		basketFormOnlinePay.classList.add('active');
		basketFormCryptoPay.classList.remove('active');
	});

	basketInputCryptoPay.addEventListener('change', (e) => {
		basketFormOnlinePay.classList.remove('active');
		basketFormCryptoPay.classList.add('active');
	});

	basketPopupItem.forEach((item, index) => {
		const removeBlockBtn = document.querySelectorAll('.basket__item__remove');
		removeBlockBtn[index].addEventListener('click', () => {
			item.remove();
			countPrice();
		});
	});

	function countPrice() {
		const result = [];

		let sum = 0;

		document.querySelectorAll('.basket__item__thing__descr__price').forEach(item => {
			const digits = item.innerHTML.match(/\d+/g).join('');
			result.push(+digits);
		});

		for (let i = 0; i < result.length; i++) {
			sum += result[i];
		}

		basketPrice.textContent = `${sum} ₽`;
	}

	countPrice();

	//Accrodions Functions

	const accordion = document.querySelectorAll('.accordion__wrapper');
	const accordionBtn = document.querySelectorAll('.accordion__more-btn');
	const accordionContent = document.querySelectorAll('.accordion__hidden');

	accordionBtn.forEach((item, index) => {
		item.addEventListener('click', () => {
			item.classList.toggle('active');
			accordion[index].classList.toggle('active');

			if (accordion[index].classList.contains('active')) {
				accordionContent[index].style.height = `${accordionContent[index].scrollHeight}px`;
				item.textContent = 'Скрыть';
			} else {
				accordionContent[index].style.height = `0px`;
				item.textContent = 'Показать еще';
			}
		});

	});

	//mobile menu

	const mobileMenuBtn = document.querySelector('.header__mobil-btn'),
		  mobileMenuContent = document.querySelector('.mobile__menu');

	mobileMenuBtn.addEventListener('click', () => {
		mobileMenuBtn.classList.toggle('active');
		mobileMenuContent.classList.toggle('active');
	});

	//filter
	const filterPrice = document.querySelector('.catalog-cards__sort-panel__price'),
		  filterPopular = document.querySelector('.catalog-cards__sort-panel__popular');

	filterPrice.addEventListener('click', () => {
		filterPrice.classList.toggle('active');
		filterPopular.classList.remove('active');
	});

	filterPopular.addEventListener('click', () => {
		filterPopular.classList.toggle('active');
		filterPrice.classList.remove('active');
	});


	//catalog list

	const catalogLinks = document.querySelectorAll('.catalog-cards-links-item'),
		  catalogPrev = document.querySelector('.catalog-cards-navigation-prev'),
		  catalogNext = document.querySelector('.catalog-cards-navigation-next');

	

	function disactiveCatalogLink() {
		catalogLinks.forEach(item => item.classList.remove('active'));
	}

	catalogLinks.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			disactiveCatalogLink();
			item.classList.add('active');
		});
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