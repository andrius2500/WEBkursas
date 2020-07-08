
function menuSlide() {
	var burger = document.querySelector('.burger-menu');
	var menuLinks = document.querySelector('.my-links');

	burger.addEventListener('click', function() {
		menuLinks.classList.toggle('menu-active');
	});
}
menuSlide();


/*function headerSlide() {
	var headerImage = document.querySelector('.ollin-background');

	window.addEventListener('scroll', function()
	{
		headerImage.style.backgroundPosition = +window.pageYOffset + "px";
	});
}
headerSlide();*/
