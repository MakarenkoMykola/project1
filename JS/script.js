"use strict";

const numberOfFilms = +prompt("Скільки фільмів ви уже подивились?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

/*const a = prompt("Один з останніх переглянутих фільмів?", ""),
	  b = prompt("На скільки оцінете його?", ""),
	  c = prompt("Один з останніх переглянутих фільмів?", ""),
	  d = prompt("На скільки оцінете його?", "");

personalMovieDB.movies[a] = b;	  
personalMovieDB.movies[c] = d;
*/
for (let i=0; i < 2; i++) {
	const a = prompt("Один з останніх переглянутих фільмів?", ""),
	      b = prompt("На скільки оцінете його?", "");

	  	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log("done");
	} else{
		console.log("error");
		i--;
	}
}

/*if (personalMovieDB.count < 10){
	console.log("Переглянуто мало фільмів");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Ти класний глядач");
}  else if (personalMovieDB.count >= 30 ) {
	console.log("Ти кіноман");
} else {
	console.log("Сталася помилка");
}

console.log(personalMovieDB);
*/

