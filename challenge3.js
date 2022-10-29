//Implement the function sumMix(arr) that given an array of integers as strings and numbers, returns the sum of the array values as if all were numbers.

function sumMix(arr) {
    var newValue = 0;
    for (let i = 0; i < arr.length; i++) {
        newValue += Number(arr[i]);                
    }
    return newValue;
}

 module.exports = sumMix