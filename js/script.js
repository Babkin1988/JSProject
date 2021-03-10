let numberOfFilms;
function start() {
    do {
    numberOfFilms = +prompt('How many movies did you watch before?', '');
    } while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null);
}
start();
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};

let showMyDB = () => {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    }
};
let movieName = "Somename";
let rank = 5;

for(let i = 0; i < 2; ++i) {
    let repeater = false;
    do {
    repeater = false;
    movieName = prompt('Movie name', '');
    rank = +prompt('Rank', '');
    if (movieName.length > 50 || movieName.length == 0) {
        repeater = true;
        continue;
    }
    } while(repeater);    
    personalMovieDB.movies[movieName] = rank;
}
     if (personalMovieDB.count < 10) {
         console.log("Too little!!!");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Great!!!");
        } else {
            console.log("Default!!!");
        }
showMyDB();