"use strict";


$('form').on('submit', updateMovie);

function updateMovie(evt) {
    evt.preventDefault();
    const title = $('#title').val();
    const rating = $('#rating').val();

    let divHold = $('<div>')
        .text(`This movie: ${title} has a rating of ${rating}`);
    let button = $('<button>').addClass('remove');
    divHold.append(button);

    $('#movieContainer').append(divHold);
}

