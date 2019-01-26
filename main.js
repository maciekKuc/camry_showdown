const burgerButton = document.querySelector('.burger');
const burgerMenu = document.querySelector('.menuItem');
const galleryImage = document.getElementById('galery-img');
const imageList = document.querySelectorAll('[onclick="showGallery(event)"]');
const closeImage = document.querySelector('.gallery-exit');
const rightButton = document.querySelector('.btn-right');
const leftButton = document.querySelector('.btn-left');

const burgerClicked = false;
let picBumber = 0;


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
	document.querySelector('.gallery-content__img').src =  e.currentTarget.src;
	for(let i = 0; i < imageList.length; i++){
		if(imageList[i].src == document.querySelector('.gallery-content__img').src){
			picBumber = i;
		}
	}
}

rightButton.addEventListener('click', () => {
	if(picBumber >= imageList.length - 1){
		picBumber = 0;
		document.querySelector('.gallery-content__img').src = imageList[picBumber].src;
	} else{
		picBumber += 1;
		document.querySelector('.gallery-content__img').src = imageList[picBumber].src;
	}

});

leftButton.addEventListener('click', () => {
	if(picBumber <= 0){
		picBumber = imageList.length - 1;
		document.querySelector('.gallery-content__img').src = imageList[picBumber].src;
	} else{
		picBumber -= 1;
		document.querySelector('.gallery-content__img').src = imageList[picBumber].src;
	}	
});

