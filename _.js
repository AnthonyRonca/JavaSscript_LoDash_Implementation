
/*
    AUTHOR: Anthony Ronca 
    ROLE: SOFTWARE ENGINEER

    SOLUTION GUIDE:
    -------------------------
    This program is coding practice to demonstrate Javscript fundamentals
*/

const _ = {
    /*
    Creates an array of elements split into groups the length of size. 
    If array can't be split evenly, the final chunk will be the remaining elements.
    */
    clamp: function (upperBound, lowerBound, currentValue){
        // Uses arithmetic to identify which bound is closer to the current value
        let diffLower = Math.abs(currentValue - lowerBound);
        let diffUpper = Math.abs(currentValue - upperBound);
        if (diffLower < diffUpper) { return lowerBound; }
        if (diffLower === diffUpper) { return currentValue; }
        return upperBound;
    },
    inRange: function (value, start, end) {
        // If only two parameters are passed then the second is the end of the search range
        if (!end) {
            end = start;
            start = 0; 
        }
        // Handle backwards input
        if ( start > end ) {
            var temp = start;
            start = end;
            end = temp; 
        }
        // If value if within range return true
        if( value < end && value >= start ){ return true; }
        return false;
    },
    /*
    Splits string into an array of its words.
    */
    words: function (sentence) {
        return sentence.split(' ')
    },    
    /*
    Pads string on the left and right sides if it's shorter than length. 
    Padding characters are truncated if they can't be evenly divided by length.
    */
    pad: function (str, len) {
        if (str.length >= len) { return str; }
        let pads = ((len - str.length) / 2)
        let result = " ".repeat(pads) + str + " ".repeat(pads);
        if (pads % 2 !== 0) { result += " "; }
        return result;
    },
    /*
    Checks if path is a direct property of object.
    */
    has: function (obj, key) {
        if (obj[key]) { return true; }
        return false;
    },
    /*
    Creates an object composed of the inverted keys and values of object. 
    If object contains duplicate values, subsequent values overwrite property assignments of previous values.
    */
    invert: function (obj) {
        let emptyObj = {};
        for(let key in obj) { emptyObj[obj[key]] = key; }
        return emptyObj
    },
    /*
    This method is like _.find except that it returns the key of the first element predicate returns truthy for instead of the element itself.
    */
    findKey: function (obj, func) {
        for(var key in obj){
            if (func(obj[key])) { return key; }
        }
    },
    /*
    Creates a slice of array with n elements dropped from the beginning.
    */
    drop: function (arr, amountToDrop) {
        if(!amountToDrop) { amountToDrop = 1; }
        for(var i = 0; i < amountToDrop; i++){
            arr.shift();
        }
        return arr
    },
    /*
    Creates a slice of array excluding elements dropped from the beginning. 
    Elements are dropped until predicate returns falsey
    */
    dropWhile: function (arr,func) {
        let index = 0;
        while (func(arr[index], index, arr)) {
            arr.shift();
        }
        return arr;
    },
    /*
    Creates an array of elements split into groups the length of size. 
    If array can't be split evenly, the final chunk will be the remaining elements.
    */
    chunk: function (arr, size = 1 ) {
        var chunks = [];
        for(var i = 0; i < arr.length; i += size){
            var chunk = arr.slice(i, i + size)
            chunks.push(chunk);
        }
        return chunks
    }
}

module.exports = _;