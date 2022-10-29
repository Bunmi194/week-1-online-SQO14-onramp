//Implement the function filterList(arr) that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filterList(arr) {
    var newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i]) == false && typeof(arr[i]) != "string") {
            newArray.push(arr[i]);
        }                               
    }
    return newArray;
}

 module.exports =filterList