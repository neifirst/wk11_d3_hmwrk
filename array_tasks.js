var arrayTasks = {

	concat: function (arr1, arr2) {
		let newArray = [];
		for (let elem of arr1) {
			newArray.push(elem);
		}
		for (let elem of arr2) {
			newArray.push(elem);
		}
		return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		let beforeArr = [];
		let afterArr = [];
		let newArr = [];

		for (let i in arr) {
			if (i < index) {
				beforeArr.push(arr[i])
			}else{
				afterArr.push(arr[i])
			}
		}
		for (let elem of beforeArr) {
			newArr.push(elem);
		}
		newArr.push(itemToAdd);

		for (let elem of afterArr) {
			newArr.push(elem);
		}

		arr = newArr;
		return arr;
	},

	square: function (arr) {
		let newArr = [];
		for (let elem of arr) {
			newArr.push(elem * elem);
		}
		return newArr;
	},

	sum: function (arr) {
		let total = 0;
		for (let elem of arr) {
			total += elem;
		}
		return total;
	},

	// findDuplicates: function (arr) {
	// 	let newArr = [];
	// 	let tempArr = [];
	// 	for (let elem of arr) {
	// 		for (let tempElem of tempArr)
	// 			if (!(elem === tempElem)) {
	// 				tempArr.push(elem);
	// 			}
	// 		}
	// 	}
	// 	newArr = tempArr;
	// 	return newArr;
	// },

	removeAndClone: function (arr, valueToRemove) {
		newArr = [];
		for (let elem of arr) {
			if (elem !== valueToRemove) {
				newArr.push(elem)
			}
		}
		return newArr;
	},

	findIndexesOf: function (arr, itemToFind) {
		newArr = [];
		for (let i in arr) {
			let elem = arr[i];
			if (elem === itemToFind) {
				newArr.push(parseInt(i));
			}
		}
		return newArr;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		let newArr = [];
		for (let elem of arr) {
			if (elem % 2 === 0)
			newArr.push(elem)
		}
		return this.sum(this.square(newArr));
	}

}

module.exports = arrayTasks
