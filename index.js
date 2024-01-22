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
*/
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