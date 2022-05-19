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

const productName = {
	product_name: "Laptop",
	price: 700.0,
	stock: 10,
	tagIds: [1, 2, 3, 4, 5],
};

const productTagMap = productName.tagIds.map((tag_id) => {
	return {
		product_id: 1,
		tag_id, //shortcut for tag_id: tag_id
	};
});

console.log(productTagMap);

// generates a new array with key/value items [
// 	({ product_id: 1, tag_id: 1 },
// 	{ product_id: 1, tag_id: 2 },
// 	{ product_id: 1, tag_id: 3 },
// 	{ product_id: 1, tag_id: 4 },
// 	{ product_id: 1, tag_id: 5 })
// ];

setTimeout(forEachLoop, 500);
setTimeout(filterLoop, 1000);
setTimeout(() => {
	console.log(mapLoop);
}, 3000);
