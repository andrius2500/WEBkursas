
// mobile burger menu
const burger = document.querySelector('.burger-menu');
const menuLinks = document.querySelector('.my-links');

function menuSlide() {
	burger.addEventListener('click', function() {
		menuLinks.classList.toggle('menu-active');
	});
}

menuSlide();

const aboutUs = document.querySelector('.my-links-wrapper');

	function menuSlideBack() {
	aboutUs.addEventListener('click', function() {
		menuLinks.classList.remove('menu-active');
	});
}

menuSlideBack();

// carousel slideshow
const carouselSlide = document.querySelector('.image-container');
const carouselImages = document.querySelectorAll('.image-container img');

//carousel buttons
const previousButton = document.querySelector('#previous-button');
const nextButton = document.querySelector('#next-button');

// counter
let counter = 1;
const size = carouselImages[0].clientWidth;

//button listeners
nextButton.addEventListener('click',()=> {
	if (counter >= carouselImages.length - 1) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter++;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

previousButton.addEventListener('click',()=> {
	if (counter <= 0) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

