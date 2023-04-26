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