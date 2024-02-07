"use strict";

/*for (let i = 0; i < 3; i++) {
	console.log(i);
	for (let j = 0; j < 3; j++) {
		console.log(j);
		
	}
}

//*
//**
//***
//****
//*****
//****** 

/*let result = "";
const length = 7;

for (let i = 1; i < length; i++) {
	for (let j=0; j < i; j++){
		result += "*";
	}

	result += "\n";
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
	console.log(`First level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second level: ${j}`);
	
		for (let k = 0; k < 3; k++) {
			if (k === 2) break first;
			console.log(`Third level: ${k}`);
		
		}
	}	
}


//for (let i = 2; i <= 10; i++) {
//	if (i%2 ===0) {
//		console.log(i);
//	}
//}
//let i = 2;
//while (i<=16) {
//if (i%2 === 0) {
//	i++;
//	continue;
//	} else {
//		console.log(i);
//	}
//	i++;
//}

//const arrayOfNumbers = [];
//for (let i=5; i<=10; i++) {
//	arrayOfNumbers[i-5] = i;
//}
//console.log(arrayOfNumbers);
/*const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i=0; i<arr.length; i++) {
	result[i] = arr[i];
}
console.log(result);


const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length; i++) {
	if (typeof(data[i]) === 'number') {
		data[i] = data[i] * 2;
	} else if (typeof(data[i]) === 'string') {
		data[i] = `${data[i]} - done`;
	}
}

console.log(data);


const data = [5, 10, "Shopping", 20, "Homework"];
const result = [];

for (let i = 1; i <= data.length; i++) {
	result[i - 1] = data[data.length - i];
}

console.log(result);

let result = "";
const lines = 5;

for (let i = 0; i <= lines; i++) {
	for (let j=0; j < lines - i; j++){
		result += " ";
	}
	for (let j=0; j<2*i+1; j++) {
		result += "*";
	}
	result += "\n";
}

console.log(result);


function showFirstMassage(text){
	console.log(text);
	console.log(num);  
}
showFirstMassage("Hello world!");
console.log(num);

function calc(a, b) {
	return (a+b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));

function ret() {
	let num = 50;
	return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
	console.log("Hello");
};
logger();

const calc = (a, b) => a + b;


const usdCurr = 38;
const discount = 0.9;

function convert(amount, curr) {
	return curr * amount;
}
function promotion(result) {
	console.log(result*discount);
	
}

const res = convert(500, usdCurr);
promotion(res);


function test() {
	for (let i=0; i<5; i++) {
		console.log(i);
		if (i === 3) return;//undefined
	}
	console.log("Done");
}
test();

function doNothing() {};
console.log(doNothing() === undefined);

function sayHello(name){
	return `Привіт, ${name}!`;
}
sayHello("Ivan");

function returnNeighboringNumbers(num) {
	return[num-1, num, num+1];
}
returnNeighboringNumbers(5);

function getMathResult(num, times) {
	if (typeof(times) !== "number" || times <= 0) {
		return num;
	}

	let str = "";

	for (let i = 1; i <= times; i++) {
		if (i === times) {
			str += `${num * i}`;
		} else {
			str += `${num * i}---`;
		}
	}

	return str;
}

getMathResult(10, 5);

const str = "test";


console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";
console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 11));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));

function calculateVolumeAndArea(length) {
	if (typeof (length) !== "number" || length < 0 || !Number.isInteger(length)) {
		return "При вычислении произошла ошибка";
	}

	let volume = 0,
		area = 0;

	volume = length * length * length;
	// length ** 3 - это тоже самое, что и выше или варианты через цикл.
	// ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
	area = 6 * (length * length);

	return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

function getCoupeNumber(seatNumber) {
	if (typeof (seatNumber) !== "number" || seatNumber < 0 || !Number.isInteger(seatNumber)) {
		return "Ошибка. Проверьте правильность введенного номера места";
	}

	if (seatNumber === 0 || seatNumber > 36) {
		return "Таких мест в вагоне не существует";
	}

	return Math.ceil(seatNumber / 4);
	// тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);

function getTimeFromMinutes(minutesTotal) {
	if (typeof (minutesTotal) !== "number" || minutesTotal < 0 || !Number.isInteger(minutesTotal) || minutesTotal <= 600) {
		return "Ошибка. Проверьте правильность введенного номера места";

	}const hours = Math.floor(minutesTotal / 60);
	const minutes = minutesTotal % 60;

	let hoursStr = "";

	switch (hours) {
	case 0: 
		hoursStr = "часов";
		break;
	case 1:
		hoursStr = "час";
		break;
	case 2:
	case 3:
	case 4:
		hoursStr = "часа";
		break;
	default:
		hoursStr = "часов";
	}

	return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180);

function findMaxNumber(a, b ,c, d) {
	
	if (typeof(a) !== "number" ||
        typeof(b) !== "number" ||
        typeof(c) !== "number" ||
        typeof(d) !== "number") {
		return 0;
	} else {
		return Math.max(a, b ,c, d);
	}
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, "6", "10");

function first() {
	setTimeout(function() {
		console.log(1);
	}, 500);
}

function second() {
	console.log(2);
}

first();
second();

function lernsJS(lang, callback) {
	console.log(`Я вчу: ${lang}`);
	callback();
}

function done() {
	console.log("Я пройшов цей урок!");
}
lernsJS("JavaScript", done);



const options = {
	name: "test",
	width: 1024,
	height: 1024,
	colors: {
		border: "black",
		bg: "red"
	},
	makeTest: function() {
		console.log("Test");
	}
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);


console.log(Object.keys(options).length);
console.log(options.name);
//видалити вказану властивість
//delete options.name;
//console.log(options);
let counter = 0;
for (let key in options) {
	if (typeof(options[key]) === "object") {
		for (let i in options[key]) {
			console.log(`Властивість ${i} має значення ${options[key][i]}`);
			
		}
	} else {

		console.log(`Властивість ${key} має значення ${options[key]}`);
		counter++;
	}
}
console.log(counter);

const arr = [2, 13, 26, 8, 10];
arr.sort();
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
//arr.forEach(function(item, i, arr) {
	console.log(`${i}: ${item} всередині масиву ${arr}`);
//});
//arr.pop();
//arr.push(10);
//console.log(arr);
//arr[99]=0;
//console.log(arr.length);
//console.log(arr);
//for (let i=0; i< arr.length; i++) {
//	console.log(arr[i]);
//}
for (let value of arr) {
	console.log(value);
}

const str = prompt("", "");
const products = str.split(",");
products.sort();/
console.log(products.join("; "));

let a = 5,
	b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
	a:5,
	b:1
};

const copy = obj; //посилання
copy.a = 10;
console.log(copy);
console.log(obj);


function copy(mainObj) {
    let objCopy = {};

    let key;
    fot (key in mainObj) {
        objCopy[key]= mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x:7,
        y:4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
	d:17,
	e:20
};
const clone = Object.assign({}, add);
clone.d = 20;

//console.log(add);
//console.log(clone);
const oldArrey = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "oenjvuterhvueron";
console.log(newArray);
console.log(oldArray);

const video = ["youtube", "vimeo", "rutube"],
	blogs = ["wordpress", "livejornal", "blogger"],
	internet = [...video, ...blogs, "facebook"];

console.log(internet);

function log(a, b, c) {
	console.log(a);
	console.log(b); 
	console.log(c); 
}

const num = [2, 5, 7];
log(...num);

const array = ["a", "b"];
const nArray = [...array];
const q = {
	one:1,
	two:2
};
const newObj = {...q};


const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		languages: ["ru", "eng"],
		programmingLangs: {
			js: "20%",
			php: "10%"
		},
		exp: "1 month"
	},
	showAgeAndLangs: function(plan) {
		const {age} = plan;
		const {languages} = plan.skills;
		let str = `Мне ${age} и я владею языками: `;

		languages.forEach(function(lang) {
			str += `${lang.toUpperCase()} `;
		});

		return str;
	}
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
	const {exp} = plan.skills;
	return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
	let str = "";
	const {programmingLangs} = plan.skills;
	for (let key in programmingLangs) {
		str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
	}

	return str;
}

showProgrammingLangs(personalPlanPeter);

const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
	let str = "";

	arr.length === 0 ? str = "Семья пуста" : str = "Семья состоит из: ";

	arr.forEach(member => {
		str += `${member} `;
	});

	return str;
}


showFamily(family);

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
	arr.forEach(city => {
		console.log(city.toLowerCase());
	});
}

standardizeStrings(favoriteCities);


let str = "some";
let strObj = new String(str);
//console.log(typeof(str));
//console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
	health:400,
	armor:100,
	sayHello: function() {
		console.log("Hello");
	}
};
const jonh = Object.create(soldier);

//const jonh = {
//	health:100
//};
//jonh.__proto__ =soldier;

Object.setPrototypeOf(jonh, soldier);
//console.log(jonh.armor);
jonh.sayHello();


// To string
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2
console.log(typeof(4 + ""));
const num = 5;
console.log("https://uar.net/catalog/" + num);
const fontSize = 25 + "px";
 //To Number
 //1
 console.log(typeof(Number("4")));
 //2
 console.log(typeof(+"4"));
 //3
 console.log(typeof(parseInt("4", 10)));
 let answ = +prompt("Hello", "");
 //To boolean
 let switcher = null;
 if(switcher) {
	console.log("Working...");
 }
 switcher = 1;
 if(switcher) {
	console.log("Working...");
 }
 //2

console.log(typeof(Boolean("4")));
//3
console.log(typeof(!!"4"));


let number = 5; debugger;

function logNumber() {
	 
	console.log(number);debugger;
}

number = 6;
logNumber();debugger;

number = 8;
logNumber();debugger;

function createCounter() {
	let counter = 0;

	const myFunction = function() {debugger;
		counter = counter + 1;debugger;
		return counter;debugger;
	};
	return myFunction;
}
debugger;
const increment = createCounter();
const c1 = increment();debugger;
const c2 = increment();debugger;
const c3 = increment();debugger;

console.log(c1, c2, c3);

const btn = document.querySelector("button");
btn.onclick = function() {
	alert("Click");
};

const btns = document.querySelectorAll("button");
const overlay = document.querySelector(".overlay");
//let i = 0;
const deleteElement = (e) => {
	console.log(e.currentTarget);
	console.log(e.type);
	//i++;
	//if (i == 1){
	//	btn.removeEventListener("click", deleteElement);
	//}
};
//btn.addEventListener("click", deleteElement);
//overlay.addEventListener("click", deleteElement);
btns.forEach(btn => {
	btn.addEventListener("click", deleteElement, {once: true});
});

const link = document.querySelector("a");
link.addEventListener("click", function(event) {
	event.preventDefault();

	console.log(e.target);
});
	
//console.log(document.head);
//console.log(document.documentElement);
//console.log(document.body.childNodes);
//console.log(document.body.firstChild);
//console.log(document.body.firstElementChild);
//console.log(document.body.lastChild);

//console.log(document.querySelector("#current").parentNode.parentNode);
//console.log(document.querySelector("#current").parentElement);
//console.log(document.querySelector("[data-current=\"3\"]").nextElementSibling);

for (let node of document.body.childNodes) {
	if (node.nodeName == "#text") {
		continue;
	}
	console.log(node);
}


function pow(x, n) {
	let result = 1;

	for (let i = 0; i < n; i++) {
		result *=x;
	}
	return result;
}

function pow(x, n) {
	if (n ===1) {
		return x;
		
	}else {
		return x*pow(x, n-1);
	}
	}
	
let students = {
	js: [{
		name:"John",
		progress: 100
	},{
		name: "Ivan",
		progress: 60
	}],

	html: {
		basic: [{
			name: "Peter",
			progress: 20
		}, {
			name: "Ann",
			progress:18
		}],

		pro: [{
			name: "Sam",
			progress: 10
		}],

		semi: {
			students: [{
				name: "Test",
				progress: 100
			}]
		}
	}
};
// ПЕРЕБІР СТРУКТУРИ ДАНИХ
function getTotalProgressByIteration(data) {
	let total = 0;
	let students = 0;

	for (let course of Object.values(data)) {
		if (Array.isArray(course)) {
			students += course.length;

			for (let i = 0; i < course.length; i++) {
				total += course[i].progress;
			}
		} else {
			for (let subCourse of Object.values(course)){
				students += subCourse.length;
			
				for (let i = 0; i < subCourse.length; i++) {
					total += subCourse[i].progress;
				}
			}
		}
	}

	return total / students;
}

//console.log(getTotalProgressByIteration(students));
// ПЕРЕБІР СТРУКТУРИ ДАНИХ

function getTotalProgressByRecursion(data) {
	if (Array.isArray(data)) {
		let total = 0;

		for (let i = 0; i < data.length; i++) {
			total += data[i].progress;
		}
		return [total, data.length];
	} else {
		let total = [0, 0];

		for (let subData of Object.values(data)) {
			const subDataArr = getTotalProgressByRecursion(subData);
			total[0] += subDataArr[0];
			total[1] += subDataArr[1];

		}
		return total;
	}
}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);

// Практика
//щоб видалити рекламу зі сторінки
// 1.знайти картинки з рекламою

document.addEventListener("DOMContentLoaded"), () => {
	const adv = document.querySelectorAll(".promo__adv img");
	//код почне працювати як дом-структура буде завантажена
	//2.видалити
	

	//міняємо жанр фільма
	const poster = document.querySelector(".promo__bg");
	const genre = poster.querySelector(".promo__genre");
	const deleteAdv = (arr) => {
		arr.forEach(item => {
			item.remove();
		});
	};

	

	
	//
	const movieList = document.querySelector(".promo__ineractive-list");

	movieList.innerHTML = ""; //почистили елемент
	movieDB.movies.sort(); //сортуємо по алфавіту назви фільмів

	movieDB.movies.forEach((film, i) => {
		movieList.innerHTML += `
<li class="promo__interactive-item">${i+1}.${film}
<div class="delete"></div>
</li>
`;


	});
	const addForm = document.querySelector("form.add");
	const addInput = addForm.querySelector(".adding__input");
	const checkbox = addForm.querySelector("[type=\"checkbox\"]");

	addForm.addEventListener("submit", (event) => {
		event.preventDefault();

		let newFilm = addInput.value;
		const favorite = checkbox.checked;

		
	

		if (newFilm) {

			if(newFilm.length > 21) {
				newFilm = `${newFilm.substring(0, 22)}...`;
			}
			movieDB.movies.push(newFilm);
			sortArr(movieDB.movies);
			createMovieList(movieDB.movies, movieList);

			if (favorite) {
				console.log("Добавляємо любимий фільм");
			}
		}
		event.target.reset();

	});
	const makeChanges = () => {
		genre.textContent = "драма";

		//міняємо фонову картинку
	
		poster.style.backgroundImage = "url(\"img/bg.jpg\")";
	
	};
	

	const sortArr = (arr) => {
		arr.sort();
	};

	sortArr(movieDB.movies); //сортуємо по алфавіту назви фільмів

	function createMovieList(films, parent) {
		movieList.innerHTML = ""; //почистили елемент
		

		movieDB.movies.forEach((films, i) => {
			parent.innerHTML += `
<li class="promo__interactive-item">${i+1}.${film}
<div class="delete"></div>
</li>
`;	
		});
		document.querySelectorAll(".delete").forEach((btn, i) => {
			btn.addEventListener("click", () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);

				createMovieList(movieDB.movies, movieList);
			});
		});

	}
	makeChanges();
	deleteAdv(adv);
	sortArr(movieDB.movies);
	createMovieList(movieDB.movies, movieList);
};



1.;//touchstfrt
2.;//touchmove
3.;//touchend
4.;//touchenter
5.;//touchleave
6.;//touchcancel

window.addEventListener("DOMContentLoaded", () => {
	const box = document.querySelector(".first");

	box.addEventListener("touchmove", (e) => {
		e.preventDefault();
		console.log(e.targetTouches[0].pageX);
		console.log(e.targetTouches);
	});
});

//властивості
//touches
//targetTouches
//changedTouches



const p = document.querySelectorAll("p");
console.log(p);



function loadScript(src) {
	const script = document.createEvent("script");
	script.src = src;
	//script.async = false;
	document.body.append(script);
}
loadScript("JS/test.js");
loadScript("some.js");


let x = 5; alert(x++); //5, постфіксна форма додавання спочатку виводить значення а потім додає

[] + false - null + true; //NaN
// []+fslse = false  fulse-null=Nan+true=NaN

console.log([] + false - null + true);
[] - string;

let y =1;
let x = y = 2;
alert(x);//2

console.log([] +1 +2);//"12"
//       string+1+2 = "12"

alert("1"[0] );//1
//індекс масива 0 -1

console.log(2&&1&&null&&undefined);//null
//оператор працює зліва направо, він зупиняється на першому false

console.log(!!!(1&&2) === (1&&2));//false

alert(null || 2&&3 || 4);

// і зупиняється на брехні
// або зупиняється на правді
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a === b);// false

alert( +"Infinity");//Infinity (number)

console.log("kamaz" > "zaz");//порівняння йде посимвольно згідно юнікоду

console.log(0 || "" || 2 || undefined ||true || false);//2

//живі колекції

const boxesQuery = document.querySelectorAll(".box");

const boxesGet = document.getElementsByClassName("box");

boxesQuery.forEach(box => {
	if (box.matches(".this")) console.log("box");
});

console.log(boxesQuery[0].closest(".wrapper"));
//boxesQuery[0].remove();
//boxesGet[0].remove();

//for (let i = 1; i < 5; i++) {
//	const div = document.createElement("div");
//	div.classList.add("box");
//	document.body.append(div);
	
//}

//console.log(boxesQuery);
//console.log(boxesGet);
//console.log(document.body.children);

//console.log(Array.from(boxesGet));


let id = Symbol("id");
const obj = {
	"name":"test",
	[id]: 1,
	getId: function() {
		return this[id];
	} 
};

//let id = Symbol();
//obj[id] = 1;

console.log(Object.getOwnPropertySymbols(obj));
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

//for (let value in obj) console.log(value);

const myAwesomeDB = {
	movis: [],
	actors:[],
	//id: 123
	[Symbol.for("id")]: 123
};

//лівий код

myAwesomeDB.id = "4616131";

console.log(myAwesomeDB[Symbol.for("id")]);
console.log(myAwesomeDB);


//ДЕСКРИПТОРИ
const birthday = Symbol("birthday");
const user = {
	name: "Alex",
	surname: "Smith",
	[birthday]: "20/04/2021",
	showMyPublicData: function() {
		console.log(`${this.name} ${this.surname}`);
	}
};
//Object.defineProperty(user, "birthday", {value: prompt("date?"), enumerable: true, configurable: true});
//console.log(Object.getOwnPropertyDescriptors(Math, "PI"));
Object.defineProperty(user, "showMyPublicData", {enumerable: false});

for (let key in user) console.log(key);
console.log(Object.getOwnPropertyDescriptors(user, birthday));
Object.defineProperties(user, {
	name: {writable: false},
	surname: {writable: false}
});


//Ітеріруємі обєкти

const user = {
	name: "Alex",
	surname: "Smith",
	birthday: "20/04/1993",
	showMyPublicData: function() {
		console.log(`${this.name} ${this.surname}`);
	}
};

//for (const key in user) {
//	console.log(user[key]);
//}

const arr = ["b", "a", "c"];
Array.prototype.someMethod = function() {};

console.dir(arr);


for (const key in arr) {
	console.log(key);
}


//const str = "string";

//for (const key in str) {
//	console.log(str[key]);
//}

const salaries = {
	john: 500,
	ivan: 1000,
	ann: 5000,
	sayHello: function() {
		console.log("Hello");
	}

};

salaries[Symbol.iterator] = function() {
	return {
		current: this.john,
		last: this.ann,
		next() {
			if (this.current < this.last) {
				this.current = this.current + 500;
				return {done: false, value: this.current};
			}else{
				return {done: true};
			}
			
		}
	};
};
const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());
//for (let res of salaries) {
console.log(res);
//}


//MAP
const user = {
	name: "Alex",
	surname: "Smith",
	birthday: "20/04/1993",
	showMyPublicData: function() {
		console.log(`${this.name} ${this.surname}`);
	}
};
const userMap = new Map(object.entries(user));


const newuserObj = new Map(Object.fromentries(user));
console.log(newuserObj);

const shops = [
	{rice: 500},
	{oil: 200},
	{bread: 50}
];

const budget = [5000, 15000, 25000];

const map = new Map([
	[{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
	map.set(shop, budget[i]);
});

console.log(map);

//console.log(map.get(shops[0]));
//console.log(map.has(shops[0]));

//map.delete(key);
//map.clear();
//map.size;
//map.keys();

//const goods = [];
//for (let shop of map.keys()) {
//	goods.push(Object.keys(shop)[0]);
//}
//console.log(goods);

//for (let price of map.values()) {
//	console.log(price);
//}

//for (let [shop, price] of map.entries()) {
//	console.log(price, shop);
////}

//map.forEach((value, key, map) => {
//	console.log(key, value);
//});

 
//Set

const arr = ["Alex", "Ann", "Oleg", "Alex"];

function unique(arr) {
	return Array.from(new Set(arr));
}
console.log(unique(arr));
//const set = new Set(arr);

//set.add("Ivan")
//	.add("Oleg");
//console.log(set);

//for (let value of set) console.log(value);

//set.forEach((value, valueAgaing, set) => {
//	console.log(value, valueAgaing);
//});
//console.log(set.values());
//console.log(set.keys());
//console.log(set.entries());

//bigint

//const bigint = 111111111111111111111111111111111111111111111111111111111111111111111111111111111n;

const someBigint = BigInt(11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111);

//console.log(5n===5);

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);
*/