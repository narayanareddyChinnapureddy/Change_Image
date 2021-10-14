let image = document.getElementById('img');

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
	let random = Math.floor(Math.random() * 9);
	image.src = './img/' + imgArray[random];
}, 2000);

