//Arrays Problem 2

let myArray = ['Pop', 'Rock', 'Jazz', 'Classical', 'Hip Hop', 'Blues']
let dogs = ['Poodle', 'Pitbull', 'Bulldog', 'Yorkie', 'Beagle']
/*let punctuation = ', ';
let combo = myArray.join("" + punctuation);

console.log(myArray.join(" "));
console.log(combo)
*/

myFunction = array => {
	let punctuation = ', ';
	return (array.join("" + punctuation));
}
console.log(myFunction(dogs));





