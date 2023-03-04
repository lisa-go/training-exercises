// Implement your own version of the following array methods: 
// map, filter, find, concat, push, pop, slice, splice, some, every, reverse.

let array = [1, 2, 3, 4, 5];

// map
Array.prototype.map = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

array.map(function (element) {
    console.log(element)
})


// filter
Array.prototype.filter = function (callback) {
    let shallowCopy = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            shallowCopy.push(this[i])
        }
    }
    return shallowCopy;
}

const filtered = array.filter(function isOdd(value) {
    if (value % 2 !== 0) return true;
})
console.log(filtered)


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
console.log(concated)


// push
let array3 = [6, 8, 10];
Array.prototype.push = function (...values) {
    let shallowCopy = this;
    for (let i = 0; i < values.length; i++) {
        shallowCopy[shallowCopy.length] = values[i];
    }
    return shallowCopy;
}

array3.push('10', 10, 'ten')
console.log(array3)


// pop
Array.prototype.myPop = function () {
    let poppedValue = this[this.length - 1];
    this.length = this.length - 1;
    return poppedValue;
}

const popped = array3.myPop();
console.log(popped)
console.log(array3)


// slice




// splice




// some




// every




// reverse