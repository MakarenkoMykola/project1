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
*/
const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));