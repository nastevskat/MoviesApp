$(document).ready(function(){
    $('#imageInput').change(function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            const imgData = event.target.result;
            localStorage.setItem('movieImage', imgData);
        };
        reader.readAsDataURL(file);
    });
    $('#title').on('input', function () {
        const title = $(this).val();
        if (title.length > 250) {
            $('#titleError').text('Title should not exceed 250 characters.');
            $(this).addClass('is-invalid');
        } else {
            $('#titleError').text('');
            $(this).removeClass('is-invalid');
        }
    });
    $('#inlineCheckbox1').on('change', function() {
        if ($('input[type="checkbox"]:checked').length > 3) {
            $('#genreError').text('You can select up to 3 genres.');
        } else {
            $('#genreError').text('');
        }
    });
    $('#year').on('input', function () {
        const year = $(this).val();
        const validYear = /^\d{4}$/;
        if (!validYear.test(year)) {
            $('#yearError').text('Please enter a valid year format (YYYY).');
            $(this).addClass('is-invalid');
        } else {
            $('#yearError').text('');
            $(this).removeClass('is-invalid');
        }
    });
    $('#description').on('input', function () {
        const description = $(this).val();
        if (description.length > 500) {
            $('#descriptionError').text('Description should not exceed 500 characters.');
            $(this).addClass('is-invalid');
        } else {
            $('#descriptionError').text('');
            $(this).removeClass('is-invalid');
        }
    });
    $("form").submit(function(event){
        event.preventDefault();

        var title = $('#title').val();
        var genre = [];
        $("input[type=checkbox]:checked").each(function () {
            genre.push($(this).val());
        });
        var year = $('#year').val();
        var description = $('#description').val();
        var imageData = localStorage.getItem('movieImage');
        var movieData = {
            title: title,
            genre: genre,
            year: year,
            description: description,
            image: imageData
        };
        var storedMovies = JSON.parse(localStorage.getItem('storedMovies')) || [];
        storedMovies.push(movieData);
        localStorage.setItem('storedMovies', JSON.stringify(storedMovies));
        $('#title').val('');
        $("input[type=checkbox]").prop('checked', false);
        $('#year').val('');
        $('#description').val('');
        $('#img').val('');
        alert("Movie Added!");
        window.location.href = "index.html";
    });
});