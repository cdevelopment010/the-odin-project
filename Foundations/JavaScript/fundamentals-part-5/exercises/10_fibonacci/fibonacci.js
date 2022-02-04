const fibonacci = function(num) {
    if (num <= 0) {
        return 'OOPS';
    }

    let initial = 1;
    let current = 1;
    let fib = [initial, current];

    for (let i = 1; i <= num-2; i++) {
        current = fib[i-1] + fib[i]; 
        fib.push(current); 
    }
    return fib[num-1]; 
};

// Do not edit below this line
module.exports = fibonacci;
