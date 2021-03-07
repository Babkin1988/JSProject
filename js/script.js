const numberOfFilms = +prompt('How many movies did you watch before?', '');
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};

const movieName1 = prompt('Movie name', ''),
rank1 = +prompt('Rank', ''),
movieName2 = prompt('Movie name', ''),
rank2 = +prompt('Rank', '');

console.log(personalMovieDB);


personalMovieDB.movies[ movieName1] = rank1;
personalMovieDB.movies[ movieName2] = rank2;