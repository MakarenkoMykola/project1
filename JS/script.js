"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Скільки фільмів ви уже подивились?", "");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Скільки фільмів ви уже подивились?", "");	
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i=0; i < 2; i++) {
		const a = prompt("Один з останніх переглянутих фільмів?", "").trim(),
	          b = prompt("На скільки оцінете його?", "");
	
	     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log("done");
		} else{
			console.log("error");
			i--;
		}
	}
}

rememberMyFilms();


function detectedPersonalLevel() {
	if (personalMovieDB.count < 10){
		console.log("Переглянуто мало фільмів");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Ти класний глядач");
	}  else if (personalMovieDB.count >= 30 ) {
		console.log("Ти кіноман");
	} else {
		console.log("Сталася помилка");
	}
}
detectedPersonalLevel();

function showMyDB (hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);
//console.log(personalMovieDB);

function writeYourGenres() {
	for (let i=1; i <=3; i++) {
		personalMovieDB.genres[i-1] = prompt(`Жанр який вам подобається під номером ${i}`).trim();
	}
}

writeYourGenres();