const _ = {
    clamp: function (upperBound, lowerBound, currentValue){
        let diffLower = Math.abs(currentValue - lowerBound);
        let diffUpper = Math.abs(currentValue - upperBound);
        if (diffLower < diffUpper) { return lowerBound; }
        if (diffLower === diffUpper) { return currentValue; }
        return upperBound;
    },
    inRange: function (value, start, end) {
        if (!end) {
            end = start;
             start = 0; 
        }
        if ( start > end ) {
            var temp = start;
             start = end;
              end = temp; 
        }
        if( value < end && value >= start ){ return true; }
        return false;
    },
    words: function (sentence) {
        return sentence.split(' ')
    },
    pad: function (str, len) {
        if (str.length >= len) { return str; }
        let pads = ((len - str.length) / 2)
        let result = " ".repeat(pads) + str + " ".repeat(pads);
        if (pads % 2 !== 0) { result += " "; }
        return result;
    },
    has: function (obj, key) {
        if (obj[key]) { return true; }
        return false;
    },
    invert: function (obj) {
        let emptyObj = {};
        for(let key in obj) { emptyObj[obj[key]] = key; }
        return emptyObj
    },
    findKey: function (obj, func) {
        for(var key in obj){
            if (func(obj[key])) { return key; }
        }
    },
    drop: function (arr, amountToDrop) {
        if(!amountToDrop) { amountToDrop = 1; }
        for(var i = 0; i < amountToDrop; i++){
            arr.shift();
        }
        return arr
    },
    dropWhile: function (arr,func) {
//he supplied predicate function takes three arguments: the current element, the current element index, and the whole array
        let index = 0;
        while (func(arr[index], index, arr)) {
            arr.shift();
        }
        return arr;
    },
    chunk: function (arr, size = 1 ) {
        var chunks = [];
        for(var i = 0; i < arr.length; i += size){
            var chunk = arr.slice(i, i + size)
            chunks.push(chunk);
        }
        return chunks
    }
}

// Do not write or modify code below this line.
module.exports = _;