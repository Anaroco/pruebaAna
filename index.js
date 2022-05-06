// Given an array of strings, return another one containing the elements that are unique in the original one.
// Example:
// 	Input: ['a', 'b', 'c', 'c']
// 	Output: ['a', 'b']   



let arr1 = ["lemon", "orange", "pear", "apple", "banana", "banana", "apple"];
let arr2 = [];
let arr3 = [];

function compareArr(array1, array2) {

    let uniqueArray = [...arr1].sort();

    for (let i = 0; i < uniqueArray.length; i++) {
        if (uniqueArray[i + 1] === uniqueArray[i]) {
            arr2.push(uniqueArray[i]);
        }
    }

    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
            arr3.push(array1[i])
        }
    }
    return arr3;
}

console.log(compareArr(arr1, arr2));







