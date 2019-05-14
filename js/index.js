// Your code goes here
// Modal
const modalView = document.querySelector('.modal-content');
const closeButton = document.querySelector('.closeBtn');
function closeModal(){
  modalView.style.display = 'none';
}
closeButton.addEventListener('dblclick', closeModal);

// Header image animation
TweenMax.to('.bus-header', 5, { left: 450, ease: Power4.easeOut });

// Nav Items
const navItems = document.querySelectorAll('.nav-link');
const navMouse = function(event) {
	event.target.style.color = 'red';
	event.preventDefault();
};

navItems.forEach(link => {
	link.addEventListener('mouseover', navMouse);
});
navItems.forEach(link => {
	link.addEventListener(
		'mouseout',
		event => (event.target.style.color = 'black')
	);
});

// Catch the Bus game
const bus = document.querySelector('.catch-bus');
const busGame = function(event) {
	event.target.style.top = `${Math.random() * 600}px`;
	event.target.style.left = `${Math.random() * 600}px`;
};

bus.addEventListener('mouseover', busGame);
