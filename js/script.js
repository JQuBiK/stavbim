'use strict';

window.addEventListener('DOMContentLoaded', () => {
	
  	const searchPanel = document.querySelector('.search-panel'),
		  searchOpenBtn = document.querySelector('.header__search-basket-btn');

	searchOpenBtn.addEventListener('click', () => {
		searchPanel.classList.toggle('active');
		if (searchPanel.classList.contains('active')) {
			basketPopup.classList.remove('active');
			mobileMenuBtn.classList.remove('active');
			mobileMenuContent.classList.remove('active');
			dropList.classList.remove('active');
			dropListBtn.classList.remove('active');
			moreMenuList.classList.remove('active');
			moreMenuWrapper.classList.remove('active');
			mobileMenuWrapper.classList.remove('active');
		}
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
		if (basketPopup.classList.contains('active')) {
			searchPanel.classList.remove('active');
			mobileMenuBtn.classList.remove('active');
			mobileMenuContent.classList.remove('active');
			dropList.classList.remove('active');
			dropListBtn.classList.remove('active');
			moreMenuList.classList.remove('active');
			moreMenuWrapper.classList.remove('active');
			mobileMenuWrapper.classList.remove('active');
		}
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

	//mobile menu

	const mobileMenuBtn = document.querySelector('.header__mobil-btn'),
		  mobileMenuWrapper = document.querySelector('.mobile__menu__wrapper'),
		  mobileMenuContent = document.querySelector('.mobile__menu');

	mobileMenuBtn.addEventListener('click', () => {
		mobileMenuBtn.classList.toggle('active');
		mobileMenuContent.classList.toggle('active');
		moreMenuList.classList.remove('active');
		mobileMenuWrapper.classList.toggle('active');
		if (mobileMenuContent.classList.contains('active')) {
			searchPanel.classList.remove('active');
			basketPopup.classList.remove('active');
			dropList.classList.remove('active');
			dropListBtn.classList.remove('active');
		}
	});

	document.addEventListener('click', (e) => {
		if (mobileMenuContent.classList.contains('active')) {
			if (e.target === mobileMenuWrapper) {
				mobileMenuContent.classList.remove('active');
				mobileMenuBtn.classList.remove('active');
				mobileMenuWrapper.classList.remove('active');
			}
		}
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
	//slider Product.html
	$('.product-card__slider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		variableWidth: true,
		arrows: true,
		dotsClass: 'slick-dots product-card__dots',
	});
	//slider Similar
	$('.similar__slider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		variableWidth: true,
		arrows: true,
		dotsClass: 'slick-dots similar__dots',
		slidesToShow: 4,
  		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					arrows: true,
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 546,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
	//slider Yousee
	$('.yousee__slider').slick({
		dots: true,
		infinite: false,
		arrows: true,
		dotsClass: 'slick-dots similar__dots',
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	//Accrodions Functions

	const accordion = document.querySelectorAll('.openable');
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

	//filter
	const filterPrice = document.querySelectorAll('.catalog-cards__sort-panel__price'),
		  filterPopular = document.querySelectorAll('.catalog-cards__sort-panel__popular');

	if (filterPrice == null || filterPopular == null) {
	} else {
		filterPrice.forEach((item, index) => {
			item.addEventListener('click', () => {
				item.classList.toggle('active');
				filterPopular[index].classList.remove('active');
			});
		});
		
	
		filterPopular.forEach((item, index) => {
			item.addEventListener('click', () => {
				item.classList.toggle('active');
				filterPrice[index].classList.remove('active');
			});
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

	function openCatalogGraade2Content(content) {
		content.style.height = `${content.scrollHeight}px`;
	}

	function closeCatalogGraade2Content(content) {
		content.style.height = 0;
	}

	if (catalogGrade2MobileContent == null || catalogGrade2AccordContent == null) {
	} else {
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
		
		catalogGrade2AccordBtn.forEach((item, index) => {
			item.addEventListener('click', (e) => {
				item.classList.toggle('active');
				catalogGrade2AccordContent[index].classList.toggle('active');
				if(item.classList.contains('active')) {
					openCatalogGraade2Content(catalogGrade2AccordContent[index]);
				} else {
					closeCatalogGraade2Content(catalogGrade2AccordContent[index]);
				}
				catalogGrade2MobileContent.style.height = catalogGrade2MobileContent.maxheight = '901px';
			});
		});
	}

	const productCardTableContent = document.querySelector('.product-card__text__sizes__accordion'),
		  productCardTableOpenBtn = document.querySelector('.product-card__text__sizes__btn-open'),
		  productCardTableCloseBtn = document.querySelector('.product-card__text__sizes__btn-close');

	let dinamicHeight;

	if (productCardTableOpenBtn == null || productCardTableCloseBtn ==null) {
	} else {
		productCardTableOpenBtn.addEventListener('click', () => {
			addSize();
		});
		productCardTableCloseBtn.addEventListener('click', () => { 
			removeSize();
		});
	}

	function addSize() {
		if ( productCardTableContent == null && productCardTableOpenBtn == null && productCardTableCloseBtn == null) {} else {
			dinamicHeight = window.getComputedStyle(productCardTableContent).getPropertyValue("height");
			productCardTableContent.style.height = `${productCardTableContent.scrollHeight}px`;
		}
	}

	function removeSize() {
		if (productCardTableContent == null) {} else {
			productCardTableContent.style.height = `${dinamicHeight}`;
		}
	}

	const accordionWrapperSize = document.querySelectorAll('.accordion__wrapper'),
		  accordionWrapperSizeHead = document.querySelector('.catalog__card-wrapper');
	let dinamicWidth;

	function getSizeandAdd() {
		if (accordionWrapperSize == null || accordionWrapperSizeHead == null) {} else {
			dinamicWidth = window.getComputedStyle(accordionWrapperSizeHead).getPropertyValue('width');
			accordionWrapperSize.forEach(item => item.style.width = dinamicWidth);
		}
	}
	getSizeandAdd();

	window.addEventListener('resize', () => {
		removeSize();
		getSizeandAdd();
	});

	window.addEventListener('scroll', () => {
        const parallax = document.querySelector('.howtobuy');
        const scrollY = window.pageYOffset;
		if (parallax == null) {
		} else {
			parallax.style.backgroundPositionY = scrollY * -0.8 + 'px';
		}
      });

	const dropList = document.querySelector('.droplist'),
	  	  dropListWrapper = document.querySelector('.droplist__wrapper'),
	  	  dropListBtn = document.querySelector('.link-more');

	dropListBtn.addEventListener('click', () => {
		dropListBtn.classList.toggle('active');
		dropList.classList.toggle('active');
		dropListWrapper.classList.toggle('active');
		searchPanel.classList.remove('active');
		mobileMenuBtn.classList.remove('active');
		mobileMenuContent.classList.remove('active');
		basketPopup.classList.remove('active');
	});

	document.addEventListener('click', (e) => {
		if(e.target === dropListWrapper) {
			dropList.classList.remove('active');
			dropListWrapper.classList.remove('active');
			dropListBtn.classList.remove('active');
		}
	});

	const openMoreMenuBtn = document.querySelector('.mobile__more'),
		  moreMenuList = document.querySelector('.mobile__menu__more'),
		  moreMenuWrapper = document.querySelector('.mobile__menu__more__wrapper');

	document.addEventListener('click', (e) => {
		if (moreMenuList.classList.contains('active')) {
			if (e.target === moreMenuWrapper || e.target.getAttribute('data-closeMoreMenu') == "") {
				moreMenuList.classList.remove('active');
				moreMenuWrapper.classList.remove('active');
			}
		}
	});

	openMoreMenuBtn.addEventListener('click', () => {
		moreMenuWrapper.classList.add('active');
		moreMenuList.classList.add('active');
	});
});