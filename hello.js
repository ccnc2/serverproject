// This is a single line comment.
/*
 This is a
 multiline
 comment */

console.log("This is external JS.");

// If/Else
var input = "";
if (input) {
	console.log(input);
} else {
	console.log("It's not defined.");
}

// Tertiary if/else
var test = false;
var output = test ? "Passed the test" : "Failed the test";
console.log(output);

// else if
var value = 0;
if (value === 0) {
	console.log("zero");
} else if (value === 1) {
	console.log("one");
} else {
	console.log("or something else");
}

console.log("===");

value = 0
// case/when -> switch/case
switch (value) {
	case 0:
	case 1: 
	  console.log('one');
	  break;
	default:
	  console.log('something else');
	  break;
}

// While loops
var x = 0;
while (x < 10) {
	console.log(x);
	x++; // same as x = x + 1 and x += 1
}

// break while loops
// Ruby break === JavaScript break
// Ruby next === JavaScript continue
// Ruby redo === ???
var a = 0;
while (true) {
	console.log(a);
	if (a >= 10) {
		break;
	} else {
	    a++;
	}
}

// for-loops
for (var i = 0; i <= 10; i++) {
	console.log(i);
}

// iterating over an array
var arr = ["a", "b", "c", "d"];
for (var i = 0; i <= arr.length; i++) {
	console.log(arr[i]);
}

// Ruby methods === JavaScript functions
function a_function(arg) {
	console.log("a_function");
	console.log(arg);
}
a_function("Hi");



// JS var functions (anonymous functions)
var b_function = function(arg1, arg2) {
	console.log("b_function");
	console.log(arg1, arg2);
}

b_function("Hi", "World");

// explicit return
function one() {
	return 1;
}

// unlimited (*rest) argument
function addAll(arg1, arg2) {
	console.log(arg1, arg2, arguments);
	// var sum = 0;
	// for (var i = 0; i < arguments.length; i++) {
	// 	sum += arguments[i];
	// }
	// return sum;
}

console.log(addAll(1, 2, 3));
// 6
console.log(addAll(0,1,2,3,4,5));
// 15

// default arguments
function funcWithDefaults(a, b) {
	if (typeof(a) === 'undefined') {
		a = 0;
	}
	if (typeof(b) === 'undefined') {
		b = 0;
	}

	return a + b;
}

console.log(funcWithDefaults());
console.log(funcWithDefaults(1));
console.log(funcWithDefaults(1,2));
console.log(funcWithDefaults(1,2,3,4,5,6,7,8));


// JavaScript "blocks"

function evenOrOdd(num) {
	if (num % 2 === 0) {
		return "even";
	} else {
		return "odd";
	}
}

function map(arr, func) {
	console.log(func);
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		result.push(func(arr[i]));
	}
	return result;
}

console.log(map([1,2,3], evenOrOdd));


// Hashy Arrays (for-in loop)
arr = [1,2,3];
arr["x"] = "something";
for (var i = 0; i <= arr.length; i++) {
	console.log(arr[i]);
}
for (var key in arr) {
	console.log(key + ": " + arr[key]);
}

// hoisting (why this doesn't throw an error)
console.log(q === undefined);
var q = 3;

console.log("====");

// function scope (with hoisting)
function scope_function() {
	var func_var;
	console.log(func_var === undefined);
	func_var = "func";
}
scope_function();
//console.log(func_var === undefined);

// global scope
g = "global";
console.log(window.g);
var ng = "still global";
console.log(window.ng);

console.log('===');

// JS OOP (kinda sorta)

var my_custom_object = {
	a_var: 1,
	a_function: function() {
		console.log("hello " + this.a_var);
	}
}
console.log(my_custom_object.a_var);
console.log(my_custom_object.a_function());

var dog = {
	name: "Fido",
	bark: function() {
		console.log("Bow wow");
	},
}


console.log(dog.name);
console.log(dog.bark());

dog.type = "Chihuahua";
console.log(dog.type);

dog.growl = function() {
	console.log("grrr");
}
console.log(dog.growl());

// defensive programming

function addTwo(num) {
	if (typeof(num) === "number" && !isNaN(num)) {
		return num + 2;
	} else {
		return NaN;
	}
}

// duck-typing

function addTwoToArray(arr) {
	if (arr.push) {
		arr.push(2);
		return arr;
	} else {
		return [];
	}
}

// document = global variable = window.document opens and html file
// called DOM essentially an API btw JS and browser


/////DOM///

function onChangeHandler(value) {
	console.log('onChangeHandler');
	///document
	console.dir(input.value);
}

console.log("Hello World");


window.onload = function () {
	//means document is ready
	console.log('Document is ready');
	var input = document.getElementById('inputId');
	console.log(input);
	input.value = "Default value."

}



///jquery primer

$(function() {
	console.log("what does this do?");
	var input = document.getElementById('inputId');
	console.log(input);
}); ///this is when the doc is ready. and its faster than when loaded upthere

$(function() {
	console.log("Document is ready");

	var input = $('input');
	input.change(function() {
		console.log("my input has changed!");
	});
})




















