// 1. write a function that takes in three parameters and returns the sum of those three parameters

function sum (x,y,z) {
	return x + y + z;
};

console.log(sum(2,3,4)); //9

// given a string, create a function that returns the last character in that string.
// examples:
// "cattywampus" --> s

function laststring (string) {
	for (var i = 0; i < string.length; i++) {
		if (string[i] == (string[string.length - 1])) {
			return string[i];
		};
	};
};

console.log(laststring("hello")); //o

// write a function that takes in one parameter and returns the cube of that parameter
// examples:
// 3 --> 27
// 4 --> 64

function cube (x) {
	return x * x * x;
};

console.log(cube(3)); //27

// define a function that takes in a string and reverses it. you are not allowed to
// call the "reverse" function (or any other string functions)

function reversestring(string) {
  var oposite = '';
  for (var i = string.length - 1; i >= 0; i--)
    oposite += string[i];
  return oposite;
};

console.log(reversestring("Whateverrr")); //rrrevetahW

// write a function that takes in two arrays of the same length as parameters. From those two arrays,
// create, then return an object which contains the elements of the first array as keys, and the
// elements of the second array as values.
// examples:
// ["exciting", "exotic"], ["markets", "britain"] --> { exciting: "markets", exotic: "britain" }
// ["a", "b", "c"], ["x", "y", "z"] --> { a: "x", b: "y", c: "z" }

var array1 = ["exciting", "exotic"];
var array2 = ["markets", "britain"];

function createobject (array1, array2) {
	var object = {};
	for (var i = 0; i < array1.length; i++) {
		object[array1[i]]= array2[i];
	};
	return object;
};

console.log(createobject(array1, array2)); //{ exciting: 'markets', exotic: 'britain' }

// Given an object with keys and values, create two arrays: one which contains the object's keys,
// and one which contains the object's values. Wrap this into a function which takes in one object
// that contains keys and values, and returns a different object that contains two keys. The first key
// should be named "keys" and will have the first array as a value. The second key should be named
// "values" and will have the second array as a value.
// examples:
// { exciting: "markets", exotic: "britain" } --> { keys: ["exciting", "exotic"], values: ["markets", "britain"] }
// { a: "x", b: "y", c: "z" } --> { keys: ["a", "b", "c"], values: ["x", "y", "z"] }

var object2 = { 
	exciting: "markets", 
	exotic: "britain" 
};

function splitobject (object) {
	var newObject = {'keys': [], 'values': []};
	for (var prop in object) {
		newObject.keys.push(prop);
		newObject.values.push(object[prop]);
	};
	return newObject;
};

console.log(splitobject(object2)); //{ keys: ["exciting", "exotic"], values: ["markets", "britain"] }

// OPTIONAL CHALLENGE 1
// write a function that takes in two parameters, x and n, and computes x to the nth power
// you may not use Math.* functions

function npower (x,n) {
	var res = 1;
	for (var i=1;i<=n;i++) { 
    	res *= x;
 	};
 	return res
};

console.log(npower(3,4));

// OPTIONAL CHALLENGE 2
// Jon has terrible social anxiety, and wishes to sit as far away from everyone as possible.
// Given an array of booleans, where the array represents a row of seated people, and each
// boolean represents whether the seat is occupied or not, find the ideal seat for Jon.

function findPerfectSeat(seats) {
	var seatNumber = 0
	var longestEmptyRow = 0
	for (var i = 0; i < seats.length; i++) { // Go over all seats
		var emtpySeatsRow = 1
		var counter = 0
		while (seats[i+counter] == false) { // Count amount of empty seats in a row
			if (emtpySeatsRow >longestEmptyRow) {
				longestEmptyRow = emtpySeatsRow
				seatNumber = (i+i+counter)/2 // Store middle seat number of longest empty row
			}
			emtpySeatsRow += 1
			counter ++
		} 
	}
	if (seatNumber%1 == 0) { // If empty row length is even, only one ideal seat
		return "Jon's ideal seat is seat: "+(seatNumber+1) // +1's because array starts at 0.
	} else { // Else, found two ideal seats
		return "Jon's ideal seat is either seat "+(Math.floor(seatNumber)+1)+" or seat "+(Math.round(seatNumber)+1)
	}
}
// true = occupied, false = empty seat
var seatedPeople1 = [true, false, false, false, true, false, false, false]
var seatedPeople2 = [false, false, false, false, false, false, true, true]
var seatedPeople3 = [true, true, true, true, true, false, true]

console.log(findPerfectSeat(seatedPeople1))
console.log(findPerfectSeat(seatedPeople2))
console.log(findPerfectSeat(seatedPeople3))




















