const burgerButton = document.querySelector('.burger');
const burgerMenu = document.querySelector('.menuItem');
const galleryImage = document.getElementById('galery-img');
const closeImage = document.querySelector('.gallery-exit');
const burgerClicked = false;


burgerButton.addEventListener('click', (e) => {
	console.log(e.currentTarget);
	if (burgerClicked === false){
		burgerMenu.classList.add('burger-menu');
		burgerMenu.classList.remove('menuItem', 'navUl');
		document.querySelector('.burger > i').classList.remove('fa-bars');
		document.querySelector('.burger > i').classList.add('fa-times');
		//burgerMenu.style.display = 'grid';
	}else{
		//burgerMenu.style.display = 'none';
		burgerMenu.classList.remove('burger-menu');
		burgerMenu.classList.add('menuItem', 'navUl');
		document.querySelector('.burger > i').classList.add('fa-bars');
		document.querySelector('.burger > i').classList.remove('fa-times');
	}
	
	burgerClicked = !burgerClicked;
});


closeImage.addEventListener('click', () => {
	document.querySelector('.gallery').style.right = '100%';
});

const showGallery = (e) => {
	document.querySelector('.gallery').style.right = '0%';
	document.querySelector('.gallery-content').appendChild(e.currentTarget);
}
