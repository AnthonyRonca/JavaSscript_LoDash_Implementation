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
    
}

// Do not write or modify code below this line.
module.exports = _;