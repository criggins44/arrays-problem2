//Arrays Problem 2

let myArray = ['Pop', 'Rock', 'Jazz', 'Classical', 'Hip Hop', 'Blues']
let dogs = ['Poodle', 'Pitbull', 'Bulldog', 'Yorkie', 'Beagle']


myFunction = array => {
	let punctuation = ', ';
//created a variable to be added to the objects in the array

	return (array.join("" + punctuation));
//used .join method convert array into a string and add  a comma to each element

}

console.log(myFunction(myArray));





