"use strict";


$('form').on('submit', updateMovie);

function updateMovie(evt) {
    evt.preventDefault();
    const title = $('#title').val();
    const rating = $('#rating').val();

    let divHold = $('<div>')
        .text(`This movie: ${title} has a rating of ${rating}`)
        .addClass('remove');

    let button = $('<button>').text('Delete');
    divHold.append(button);

    $('#movieContainer').append(divHold);
}

$('#movieContainer').on('click', 'button', deleteMovies);
function deleteMovies(event) {
    // (event.target.parentElement.remove();) //DOM way
    $(event.target).parent().remove();
}