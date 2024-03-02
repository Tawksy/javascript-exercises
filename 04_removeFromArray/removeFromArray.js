const removeFromArray = function(arr, ...args) {

    if (!Array.isArray(arr)) {
        return "ERROR"
    }
    //Check if input arr is an array

    return arr.filter(element => !args.includes(element)); 
    

};

// Do not edit below this line
module.exports = removeFromArray;
