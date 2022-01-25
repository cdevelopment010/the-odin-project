const removeFromArray = function() {
    let args = arguments; 
    let arr = [...args[0]];  

    for (let i = 1; i < args.length; i++) {
        if (arr.indexOf(args[i]) == -1) {
            continue;
        }
        arr.splice(arr.indexOf(args[i]),1)
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
