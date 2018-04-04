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
		 let newArray = [];
		 for(let i = 0; i < index; i++) {
				 newArray.push(arr[i]);
		 }
		 newArray.push(itemToAdd);
		 for(let i = index; i < arr.length; i++) {
				 newArray.push(arr[i]);
		 }
		 return newArray;
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

	findDuplicates: function (arr) {
    var duplicates = [];
    for (elem of arr){
        if (arr.indexOf(elem) !== arr.lastIndexOf(elem)){
            if (!duplicates.includes(elem)){
                duplicates.push(elem);
            }
        }
    }
    return duplicates;
  },

		// ^ Courtesy of a bit of help from danny sr! And it breaks the nuts-and-bolts-only thing. Oh well. 

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
