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
	//slider Product
	$('.product__list-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		variableWidth: true,
		arrows: false,
		dotsClass: 'slick-dots works__dots',
	});

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

	if (filterPrice == null || filterPopular == null) {
	} else {
		filterPrice.addEventListener('click', () => {
			filterPrice.classList.toggle('active');
			filterPopular.classList.remove('active');
		});
	
		filterPopular.addEventListener('click', () => {
			filterPopular.classList.toggle('active');
			filterPrice.classList.remove('active');
		});
	}

	
	

	//catalog list

	const catalogLink = document.querySelectorAll('.catalog-cards-links-item'),
		  catalogPrev = document.querySelector('.catalog-cards-navigation-prev'),
		  catalogNext = document.querySelector('.catalog-cards-navigation-next');

	let linkIndex = 0;

	if (catalogLink == null || catalogPrev == null || catalogNext == null) {
	} else {
		function disactiveCatalogLink() {
			catalogLink.forEach(item => item.classList.remove('active'));
		}
	
		function activeCatalogLink(i) {
			catalogLink[i].classList.add('active');
		}
	
		catalogLink.forEach((item,index) => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				linkIndex = index;
				disactiveCatalogLink();
				activeCatalogLink(linkIndex);
			});
		});
	
		catalogPrev.addEventListener('click', () => {
			linkIndex -= 1;
			disactiveCatalogLink();
			if (linkIndex < 0) {
				linkIndex = catalogLink.length - 1
				activeCatalogLink(linkIndex);
			} else {
				activeCatalogLink(linkIndex);
			}
		});
	
		catalogNext.addEventListener('click', () => {
			linkIndex += 1;
			disactiveCatalogLink();
			if (linkIndex > catalogLink.length - 1) {
				linkIndex = 0
				activeCatalogLink(linkIndex);
			} else {
				activeCatalogLink(linkIndex);
			}
		});
	
		disactiveCatalogLink();
		activeCatalogLink(linkIndex);
	}

	

	//catalog grade 2

	const catalogGrade2AccordBtn = document.querySelectorAll('.item__catalog-accord-title'),
		  catalogGrade2MobileBtn = document.querySelector('.item__catalog__content-block-mobile-filter-main-btn'),
		  catalogGrade2MobileContent = document.querySelector('.item__catalog__content-block-mobile-filter-main-content'),
		  catalogGrade2AccordContent = document.querySelectorAll('.item__catalog-accord-descr');

	catalogGrade2AccordContent.forEach(item => openCatalogGraade2Content(item));
	closeCatalogGraade2Content(catalogGrade2MobileContent);

	catalogGrade2MobileBtn.addEventListener('click', () => {
		catalogGrade2MobileBtn.classList.toggle('active')
		if (catalogGrade2MobileBtn.classList.contains('active')) {
			openCatalogGraade2Content(catalogGrade2MobileContent);
		} else {
			closeCatalogGraade2Content(catalogGrade2MobileContent);
		}
	});
	
	function openCatalogGraade2Content(content) {
		content.style.height = `${content.scrollHeight}px`;
	}

	function closeCatalogGraade2Content(content) {
		content.style.height = 0;
	}

	catalogGrade2AccordBtn.forEach((item, index) => {
		item.addEventListener('click', (e) => {
			item.classList.toggle('active');
			catalogGrade2AccordContent[index].classList.toggle('active');
			if(item.classList.contains('active')) {
				openCatalogGraade2Content(catalogGrade2AccordContent[index]);
			} else {
				closeCatalogGraade2Content(catalogGrade2AccordContent[index]);
			}
		});
	});

	// const filterItemParent = document.querySelector('.item__catalog__content-block-filters-show'),
	// 	  filterCloseItem = document.querySelectorAll('.item__catalog__content-block-filters-show-item span'),
	// 	  filterInputs = document.querySelectorAll('.item__catalog__filter-block__manufacturer__descr-input input');

	// function appendItem(name) {
	// 	const filterItem = document.createElement('div');
	// 	filterItem.className = 'item__catalog__content-block-filters-show-item';
	// 	filterItem.id = `${name}`;
	// 	filterItem.innerHTML = `<p>${name}</p><span>&#10006;</span>`;
	// 	filterItemParent.append(filterItem);
	// }

	// filterInputs.forEach((item, index) => {
	// 	item.addEventListener('change', () => {
	// 		if (item.checked) {
	// 			appendItem(item.name);
	// 		} else {
				
	// 		}
	// 	});
	// });
});