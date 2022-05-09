// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
console.log('Let’s get ready to party with jQuery!');

// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article').children('img').addClass('image-center');
// Remove the last paragraph in the article.
$('article').children('p').eq(5).remove();
// Set the font size of the title to be a random pixel size from 0 to 100.
let newFontSize = `${Math.round(Math.random() * 100)}px`;
$('#title').css('fontSize', newFontSize);
// console.log(newFontSize);

// Add an item to the list; it can say whatever you want.
$('ol').append('<li>I am a new item!</li>');
// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside').children('*').remove();
$('aside').append(`<p> I'm sorry for the list's existence</p>`);

// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

$('.form-control').on('change', function() {
	let r = $('input').eq(0).val();
	let g = $('input').eq(1).val();
	let b = $('input').eq(2).val();
	$('body').css('background-color', `rgb(${r},${g},${b})`);
});

// Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', function() {
	$('img').remove();
});
