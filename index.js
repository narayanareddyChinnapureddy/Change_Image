let images = document.querySelectorAll('img');
let image1 = document.getElementById('img1');
let image2 = document.getElementById('img2');
let image3 = document.getElementById('img3');
let image4 = document.getElementById('img4');
let image5 = document.getElementById('img5');

let imgArray = [
	'image1.jpg',
	'image2.jpg',
	'image3.jpg',
	'image4.jpg',
	'image5.jpg',
	'image6.jpg',
	'image7.jpg',
	'image8.jpg',
	'image9.jpg',
];

var interval = setInterval(() => {
	let random = Math.floor(Math.random() * 5);
	image1.src = './img/' + imgArray[random];
}, 2000);

var interval = setInterval(() => {
	let random = Math.floor(Math.random() * 6);
	image2.src = './img/' + imgArray[random];
}, 2000);

var interval = setInterval(() => {
	let random = Math.floor(Math.random() * 7);
	image3.src = './img/' + imgArray[random];
}, 2000);

var interval = setInterval(() => {
	let random = Math.floor(Math.random() * 8);
	image4.src = './img/' + imgArray[random];
}, 2000);

var interval = setInterval(() => {
	let random = Math.floor(Math.random() * 9);
	image5.src = './img/' + imgArray[random];
}, 2000);
