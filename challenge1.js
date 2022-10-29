//Implement a function countTruthy(arr) that takes an array and returns the number of truthy values
function countTruthy(arr) {
    let trueArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (Boolean(arr[i]) == true) {
                trueArray.push(arr[i]);
            }                
        }
        return trueArray.length;
}
module.exports = countTruthy