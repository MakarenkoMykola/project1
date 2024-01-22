"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt("Скільки фільмів ви уже подивились?", "");
	
		while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Скільки фільмів ви уже подивились?", "");	
		}
	 },
	rememberMyFilms: function() {
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
	},
	detectedPersonalLevel: function() {
		if (personalMovieDB.count < 10){
			console.log("Переглянуто мало фільмів");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("Ти класний глядач");
		}  else if (personalMovieDB.count >= 30 ) {
			console.log("Ти кіноман");
		} else {
			console.log("Сталася помилка");
		}
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function() {
		if(personalMovieDB.privat) {
			personalMovieDB.privat =false;
		}else{
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function() {
		for (let i=1; i <=3; i++) {
			let genre = prompt(`Жанр який вам подобається під номером ${i}`);

			if (genre === "" || genre == null) {
				console.log("Введені некорректні дані або не ввели їх зовсім");
				i--;
			}else{
				personalMovieDB.genres[i-1] = genre;
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимий жанр ${i + 1} - це ${item}`);
		});
	}
};

