const burgerButton = document.querySelector('.burger');
const burgerMenu = document.querySelector('.menuItem');
const galleryImage = document.getElementById('galery-img');
const imageList = document.querySelectorAll('[onclick="showGallery(event)"]');
const closeImage = document.querySelector('.gallery-exit');
const rightButton = document.querySelector('.btn-right');
const leftButton = document.querySelector('.btn-left');

let burgerClicked = false;
let picNumber = 0;


burgerButton.addEventListener('click', (e) => {
				
		document.querySelector('.burger > i').classList.toggle('fa-bars');
		document.querySelector('.burger > i').classList.toggle('fa-times');

		if (burgerClicked === false){
			burgerMenu.classList.add('burger-menu');
			burgerMenu.classList.remove('menuItem', 'navUl');
			burgerMenu.style.display = 'grid';
		}else{
			burgerMenu.classList.remove('burger-menu');
			burgerMenu.classList.add('menuItem', 'navUl');
			burgerMenu.style.display = 'none';
		}
	
	burgerClicked =! burgerClicked;
});


closeImage.addEventListener('click', () => {
	document.querySelector('.gallery').style.right = '100%';
});

const showGallery = (e) => {
	if(self.innerWidth > 700){
		document.querySelector('.gallery').style.right = '0%';
		document.querySelector('.gallery-content__img').src =  e.currentTarget.src;
		for(let i = 0; i < imageList.length; i++){
		if(imageList[i].src == document.querySelector('.gallery-content__img').src){
				picNumber = i;
			}
		}
	}
	
}

rightButton.addEventListener('click', () => {
	if(picNumber >= imageList.length - 1){
		picNumber = 0;
		document.querySelector('.gallery-content__img').src = imageList[picNumber].src;
	} else{
		picNumber += 1;
		document.querySelector('.gallery-content__img').src = imageList[picNumber].src;
	}

});

leftButton.addEventListener('click', () => {
	if(picNumber <= 0){
		picNumber = imageList.length - 1;
		document.querySelector('.gallery-content__img').src = imageList[picNumber].src;
	} else{
		picNumber -= 1;
		document.querySelector('.gallery-content__img').src = imageList[picNumber].src;
	}	
});

