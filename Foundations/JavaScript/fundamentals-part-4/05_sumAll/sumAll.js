const sumAll = function(a, b) {
    // check min and max
    let min = a <= b ? a : b; 
    let max = a >= b ? a : b; 
    let sum = 0; 

    if (min < 0 || typeof min != 'number' || typeof max != 'number') {
        return 'ERROR';
    }

    for (let i = min; i <= max; i ++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
