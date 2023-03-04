// Implement your own version of the following array methods: 
// map, filter, find, concat, push, pop, slice, splice, some, every, reverse.

let array = [1, 2, 3, 4, 5];

// map
Array.prototype.map = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

array.map(function (element) {
    console.log(element);
})


// filter
Array.prototype.filter = function (callback) {
    let copy = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            copy[copy.length] = this[i];
        }
    }
    return copy;
}

const filtered = array.filter(function isOdd(value) {
    if (value % 2 !== 0) return true;
})
console.log(filtered);


// concat
let array2 = ["a", "b", "c"];
Array.prototype.concat = function (value) {
    let copy = this;
    for (let i = 0; i < value.length; i++) {
        copy[copy.length] = value[i];
    }
    return copy;
}

const concated = array.concat(array2);
console.log(concated);


// push
let array3 = [6, 8, 10];
Array.prototype.push = function (...values) {
    let copy = this;
    for (let i = 0; i < values.length; i++) {
        copy[copy.length] = values[i];
    }
    return copy;
}

array3.push('10', 10, 'ten');
console.log(array3);


// pop
Array.prototype.pop = function () {
    let poppedValue = this[this.length - 1];
    this.length = this.length - 1;
    return poppedValue;
}

const popped = array3.pop();
console.log(popped);
console.log(array3);


// slice
let array4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.slice = function (start, end = undefined) {
    let copy = [];
    if (start === undefined) {
        start = 0;
    }
    if (end === undefined) {
        end = this.length;
    }
    if (start < 0) {
        start = this.length + start;
    }
    if (end < 0) {
        end = this.length + end;
    }
    for (let i = start; i < end; i++) {
        copy[copy.length] = this[i];
    }
    return copy;
}

const sliced = array4.slice(2, -4);
console.log(sliced);


// splice
Array.prototype.splice = function (start, deleteCount = 0, ...values) {
    let deletedItems = [];
    let copy = [];

    // push all items before start index to copy
    for (let i = 0; i < start; i++) {
        copy[copy.length] = this[i];
    }
    // push deleted items to deletedItems
    for (let j = 0; j < deleteCount; j++) {
        deletedItems[deletedItems.length] = this[start + j];
    }
    // push values into copy
    for (let k = 0; k < values.length; k++) {
        copy[copy.length] = values[k];
    }
    // push remaining array items into copy
    for (let l = start + deleteCount; l < this.length; l++) {
        copy[copy.length] = this[l];
    }
    // replacing original array with copy
    this.length = copy.length;
    for (let m = 0; m < this.length; m++) {
        this[m] = copy[m];
    }
    return deletedItems;
}

const spliced = array4.splice(4, 2, 'a', 'n', 't');
console.log(spliced);
console.log(array4);


// some
let array5 = [1, 3, 5, 7];
Array.prototype.some = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
}

const someHasEven = array4.some(function isEven(element) {
    return element % 2 === 0;
})
console.log(someHasEven);

const someOnlyOdd = array5.some(function isEven(element) {
    return element % 2 === 0;
})
console.log(someOnlyOdd);


// every
Array.prototype.every = function(callback){
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false;
        }
    }
    return true;
}

const everyOdd = array5.every(function isOdd(element) {
    return element % 2 !== 0;
})
console.log(everyOdd)

const everyNotOdd = array4.every(function isOdd(element) {
    return element % 2 !== 0;
})
console.log(everyNotOdd)

// reverse
Array.prototype.reverse = function(){
    let copy = [];
    for (let i = 0; i < this.length; i++) {
        copy[i] = this[this.length - 1 - i];
    }
    for (let k = 0; k < this.length; k++) {
        this[k] = copy[k]
    }
    return this;
}

array4.reverse();
console.log(array4)