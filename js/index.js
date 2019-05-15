// Your code goes here

// Load Event - Element animations
window.addEventListener('load', () => {
	const timeline = new TimelineMax();
	timeline.from('.logo-heading', 2, { scale: 0, x: 600, ease: Power4.easeOut });
	timeline.staggerFrom(
		'.nav-link',
		1,
		{ scale: 0.5, opacity: 0, ease: Elastic.easeOut },
		0.2
	);
	timeline.from('.modal-content', 1.5, { scale: 0, ease: Bounce.easeOut });
	timeline.to('.bus-header', 5, { left: 450, ease: Bounce.easeOut });
});

// Click - Modal
const modalView = document.querySelector('.modal-content');
const closeButton = document.querySelector('.closeBtn');
function closeModal() {
	modalView.style.display = 'none';
}
closeButton.addEventListener('click', closeModal);

// Double click / Mouseout - Nav Items
const navItems = document.querySelectorAll('.nav-link');
const navMouse = function(event) {
	event.target.style.color = 'red';
	event.preventDefault();
};

navItems.forEach(link => {
	link.addEventListener('dblclick', navMouse);
});
navItems.forEach(link => {
	link.addEventListener(
		'mouseout',
		event => (event.target.style.color = 'black')
	);
});

// Mouseover - Catch the Bus game
const bus = document.querySelector('.catch-bus');
const busGame = function(event) {
	event.target.style.top = `${Math.random() * 600}px`;
	event.target.style.left = `${Math.random() * 600}px`;
};

bus.addEventListener('mouseover', busGame);

// Scroll - Header Background
const headerElement = document.querySelector('header');
headerElement.addEventListener('wheel', event => {
	const red = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);

	event.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
});

// Drag / Dragend - Main Content Images
const contentImg = document.querySelectorAll('img.content-img');
contentImg.forEach(element => {
	element.addEventListener('drag', () => {
		TweenMax.to(element, 3, { scale: 1.5, ease: Elastic.easeOut });
	});
});

contentImg.forEach(element => {
	element.addEventListener('dragend', () => {
		TweenMax.to(element, 3, { scale: '1', ease: Elastic.easeOut });
	});
});

// Delete Keydown - Container
const delElement = document.querySelector('.del-content');
const contElement = document.querySelector('#container-main');
document.addEventListener('keydown', event => {
	if (event.keyCode === 46) {
		contElement.style.opacity = '0';
		delElement.style.display = 'block';
	}
});

// Enter Keydown - Container
document.addEventListener('keydown', event => {
	if (event.keyCode === 13) {
		contElement.style.opacity = '100';
		delElement.style.display = 'none';
	}
});
