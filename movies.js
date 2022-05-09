// Ensure that a title has at least 2 characters in it.
$(document).ready(function() {
	$('#submit-btn').attr('disabled', true);

	$('#title').on('keyup', function() {
		if ($('#title').val() != '' && $('#title').val().length >= 2) {
			$('#submit-btn').attr('disabled', false);
		}
		else {
			$('#submit-btn').attr('disabled', true);
		}
	});
});

// https://stackoverflow.com/questions/48482239/disable-button-unless-min-length-of-textarea-is-reached-javascript

// When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
$('#submit-btn').on('click', function(e) {
	const movieTitle = $('#title').val();
	const rating = $('#rating').val();
	$('ol').append(
		`<div><li> ${movieTitle}: ${rating} <input type="button" value="Remove" class="remove-btn"></li></div>`
	);
});

// When the button to remove is clicked, remove each title and rating from the DOM.
$('ol').on('click', '.remove-btn', function() {
	$(this).parent('li').remove();
});

// Add buttons to sort list

function sortFunc(a, b) {
	return $(b).text().toUpperCase() < $(a).text().toUpperCase() ? 1 : -1;
}

$('#a-z').on('click', function() {
	$('ol li').sort(sortFunc).appendTo('ol');
});

// https://www.geeksforgeeks.org/how-to-sort-a-list-alphabetically-using-jquery/

$(document).ready(function() {
	$('#a-z').attr('disabled', true);

	$('#submit-btn').on('click', function() {
		if ($('li').length > 1) {
			$('#a-z').attr('disabled', false);
		}
		else {
			$('#submit-btn').attr('disabled', true);
		}
	});
});

$(document).ready(function() {
	$('#rating-sort').attr('disabled', true);

	$('#submit-btn').on('click', function() {
		if ($('li').length > 1) {
			$('#rating-sort').attr('disabled', false);
		}
		else {
			$('#submit-btn').attr('disabled', true);
		}
	});
});
