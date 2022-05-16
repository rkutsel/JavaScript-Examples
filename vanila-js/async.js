// 1. Callback functions. This is considered to be legacy method of dealing with JS async, but still used a lot today.
function isNumberCallBack(arg, callBack) {
	console.log("Waiting for a callback function...\n");
	setTimeout(() => callBack(arg), 200);
}

function callBack(arg) {
	if (typeof arg === "number") {
		console.log(arg, "is a number!\n");
	} else console.log(arg, "is not a number\n");
}
setTimeout(() => {
	isNumberCallBack("abc", callBack);
}, 300);
setTimeout(() => {
	isNumberCallBack("@#$", callBack);
}, 400);
setTimeout(() => {
	isNumberCallBack(10, callBack);
}, 500);

// 2. Promises is another way to deal with async JS. It was added in ES2015.
function isNumberPromise(arg) {
	return new Promise((resolve, reject) => {
		try {
			console.log("Waiting for a new promise...\n");
			setTimeout(() => {
				if (typeof arg === "number") {
					resolve(`${arg} is a number!`);
				} else resolve(`${arg} not a number!`);
			}, 1200);
		} catch (error) {
			throw error;
		}
	});
}

setTimeout(() => {
	isNumberPromise(110)
		.then((data) => console.log(data))
		.then(() => console.log(true));
}, 1500);
setTimeout(() => {
	isNumberPromise("110")
		.then((data) => console.log(data))
		.then(() => console.log(false));
}, 2000);

// 3. Async/await is a a syntactic sugar for Promise objects. It was introduced in ES2017.
async function isNumberAsync(arg) {
	await asyncResolve(arg);
}

async function asyncResolve(arg) {
	try {
		console.log("Waiting for a new async promise...\n");
		setTimeout(() => {
			if (typeof arg === "number") {
				console.log(`${arg} is a number!`);
			} else console.log(`${arg} not a number!`);
		}, 1000);
	} catch (error) {
		throw error;
	}
}
setTimeout(() => {
	isNumberAsync(23).then(() => console.log(true));
}, 4000);

setTimeout(() => {
	isNumberAsync("data").then(() => console.log(false));
}, 5100);
