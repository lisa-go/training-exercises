Array.prototype.mySplice = function(start, deleteCount, ...values) {
    let tempArr;
    let deletedItems = this.slice(start, start + deleteCount);
    if (deleteCount !== undefined) {
        tempArr = [...this.slice(0, start), ...this.slice(start + deleteCount)];
    }
    if (values.length !== 0) {
        tempArr = [...tempArr.slice(0, start), ...values, ...tempArr.slice(start)];
    }
    this.length = tempArr.length;
    tempArr.forEach((item, index) => {
        this[index] = item;
    })
    return deletedItems;
}

let array = [1, 2, 3, 4, 5, 6];
const arr1 = array.mySplice(2, 2, 10, 12, 13);
console.log(arr1)
console.log(array)