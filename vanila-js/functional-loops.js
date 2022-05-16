const characterNames = [
	{ name: "Gilfoyle", age: 34 },
	{ name: "Jared", age: 32 },
	{ name: "Erich", age: 39 },
	{ name: "Monica", age: 27 },
	{ name: "Dinesh", age: 28 },
];

// 1. Functional for loop:
function forEachLoop() {
	console.log("Using forEach functional loop.\n");
	characterNames.forEach((element, index) =>
		console.log(`Name: ${element.name}, Age: ${element.age}, Index: ${index}`)
	);
}

// 2. Filter is used to return conditional matches:
function filterLoop() {
	console.log("Using filter functional loop.\n");
	const ageCondition = characterNames.filter((person) => {
		return person.age < 30;
	});

	console.log(ageCondition);
}

// 3. MAP (Make An Array please!) returns a new array.

const mapLoop = characterNames.map((element) => {
	const newObject = { ...element };

	// compare age and add new key/val pair
	if (newObject.age > 30) {
		newObject.qualified = true;
	} else {
		newObject.qualified = false;
	}
	// return new object with added values
	return newObject;
});

setTimeout(forEachLoop, 500);
setTimeout(filterLoop, 1000);
setTimeout(() => {
	console.log(mapLoop);
}, 3000);
