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
    let shallowCopy = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            shallowCopy.push(this[i]);
        }
    }
    return shallowCopy;
}

const filtered = array.filter(function isOdd(value) {
    if (value % 2 !== 0) return true;
})
console.log(filtered);


// concat
let array2 = ["a", "b", "c"];
Array.prototype.concat = function (value) {
    let shallowCopy = this;
    for (let i = 0; i < value.length; i++) {
        shallowCopy.push(value[i])
    }
    return shallowCopy;
}

const concated = array.concat(array2);
console.log(concated);


// push
let array3 = [6, 8, 10];
Array.prototype.push = function (...values) {
    let shallowCopy = this;
    for (let i = 0; i < values.length; i++) {
        shallowCopy[shallowCopy.length] = values[i];
    }
    return shallowCopy;
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

Array.prototype.slice = function(start, end = undefined){
    let shallowCopy = [];
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
        shallowCopy.push(this[i]);
    }
    return shallowCopy;
}

const sliced = array4.slice(2, -4);
console.log(sliced);


// splice
Array.prototype.mySplice = function(start, deleteCount = 0, ...values) {
    let deletedItems = [];
    let shallowCopy = [];

    // push all items before start index to shallowcopy
    for (let i = 0; i < start; i++) {
        shallowCopy.push(this[i]);
    }
    // push deleted items to deletedItems
    for (let j = 0; j < deleteCount; j++) {
        deletedItems.push(this[start + j]);
    }
    // push values into shallowcopy
    for (let k = 0; k < values.length; k++) {
        shallowCopy.push(values[k]);
    }
    // push remaining array items into shallowcopy
    for (let l = start + deleteCount; l < this.length; l++) {
        shallowCopy.push(this[l]);
    }
    // replacing original array with shallowCopy
    this.length = shallowCopy.length;
    for (let m = 0; m < this.length; m++) {
        this[m] = shallowCopy[m];
    }
    return deletedItems;
}

const spliced = array4.mySplice(4, 2, 'a', 'n', 't');
console.log(spliced);
console.log(array4);


// some




// every




// reverse