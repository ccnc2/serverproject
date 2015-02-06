// this is a single line comment.
/* this is a 
multiline 
comment
*/

console.log("This is external JS.");

var input;

if (input === undefined) {
		console.log("It's not defined.");
} 
	else {
		console.log(input);
}

var test = false;
var output = test ? "Passed the test" : "Failed the test";
console.log(output);

var value = 0;
if (value === 0) {
	console.log("zero");
} else if (value === 1) {
	console.log("one");
} else {
console.log("or something else");
}

//case / when -> switch / case
switch (value) {
	case 0:
	console.log('zero');
	break;
	case 1:
	console.log('one');
	break;
	default:
	console.log('something else');
	break;
}


// while loops

var x = 0;
while (x < 10) {
	console.log(x);
	x++;

}

// break while loops
// ruby break === js break
// ruby next === js continue

var a = 0;
while (true) {
	console.log(a);
	if (a >= 10) {
		break;
		//continue

	} else {
		a++;
	}
}

// for-loops - read as checkmark
for (var i =0; 1 <= 10; i++) {
	console.log(i);
}

//iterating over an array - have to use for-loop to do each (each doesnt exist in js)

var arr = ["a", "b", "c"]
for (var i = 0; i <= arr.length; i++) {
	console.log(arr[i]);
}

//ruby methods === js functions
function function_name(arg) {
	console.log("function_name");
	console.log(arg);
}

funcion_name("Hi");

//JS var functions
var b_function = function(arg) {
	console.log("b_function");
	console.log(arg);
}

b_function("Hi");


// explicit return

function one() {
	return 1;
}

// unlimited (*rest) argument
function addAll() {
	var sum = 0
	for (var i = 0, i < arguments.length; i++){
		sum += arguments[i];
	}
	return sum;
}


console.log(addAll(1,2,3));
//6
console.log(addAll(0,1,2,3,4,5));
//15

//default arguments
// in ruby def a_method(arg1 = nil, arg2 = nil) 

function funcWithDefaults(a,b) {
	if (typeof(a) === 'undefined') {
		a = 0;
	}
	if (typeof(b) === 'undefined') {
		b = 0
	}
	return a + b;
}

funcWithDefaults();
funcWithDefaults(1);
funcWithDefaults(1,2);

//JS blocks

funtion evenOrOdd(num) {
	if (num % 2 === 0) {
		return "even"
	} else {
		return "odd";
	}
}

function map(arr, func) {
	var result = [];
	for (var i=0; i < arr.length; i++){
		result.push(func(arr[i]));
	}
	return result;
}

console.log(map([1,2,3]), evenOrOdd));



$('a').click(function(evt) {
	console.log("link clicked")
}

//ajax

$.get ('http://graph.facebook.com/eddroid', function() {
	console.log
}

	)








































