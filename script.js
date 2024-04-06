$(document).ready(function() {
    function displayMergedMovies(mergedArray) {
        var moviesContainer = $('#moviesContainer');
        moviesContainer.empty();
        mergedArray.forEach(function(movie) {
            var card = $('<div class="col"></div>');
            var cardContent = $('<div class="card h-100"></div>');
            var img = $('<img class="card-img-top" alt="...">').attr('src', movie.image); 
            var cardBody = $('<div class="card-body"></div>');
            var title = $('<h5 class="card-title"></h5>').text(movie.title);
            var year = $('<p class="year"></p>').text(movie.year);
            var genre = $('<p class="genre text-muted"></p>').text(movie.genre.join(', '));
            var description = $('<p class="card-text"></p>').text(movie.description);
            cardBody.append(title, year, genre, description);
            cardContent.append(img, cardBody);
            card.append(cardContent);
            moviesContainer.append(card);
            card.popover({
                container: 'body',
                placement: 'right',
                content:  movie.description, 
                trigger: 'click' 
            });
        });
    }
    function mergeLocalStorageWithData() {
        var localStorageData = localStorage.getItem('storedMovies');
        if (localStorageData !== null) {
            var localStorageMoviesArray = JSON.parse(localStorageData);
            var mergedArray = moviesArray.concat(localStorageMoviesArray);
            console.log('Merged Array:', mergedArray);
            displayMergedMovies(mergedArray);
        } else {
            console.log('No movies found in local storage.');
            displayMergedMovies(moviesArray);
        }
    }
    mergeLocalStorageWithData();
    $('#genreDropdown').on('click', 'a.dropdown-item', function(e) {
        e.preventDefault();
        var selectedGenre = $(this).data('genre');
        filterMoviesByGenre(selectedGenre);
    });
    function filterMoviesByGenre(genre) {
        var localStorageData = localStorage.getItem('storedMovies');
        var localStorageMoviesArray = localStorageData ? JSON.parse(localStorageData) : [];
        var mergedArray = moviesArray.concat(localStorageMoviesArray);
        var filteredMovies;
        if (genre === 'All Genres') {
            filteredMovies = mergedArray;
        } else {
            filteredMovies = mergedArray.filter(function(movie) {
                return movie.genre.includes(genre);
            });
        }
        displayMergedMovies(filteredMovies);
    }
});
