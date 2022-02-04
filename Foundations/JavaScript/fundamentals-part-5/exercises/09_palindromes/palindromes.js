const palindromes = function (str) {
    let strWithoutPunc = str.replace(/[^\w\s]|\s/g,''); 
    let strArr = strWithoutPunc.split('');
    let strReverse = strWithoutPunc.split('').reverse(); 
    for (let i = 0; i < strArr.length / 2; i++) {
        if (strArr[i].toLowerCase() !== strReverse[i].toLowerCase()){
            return false;
        }
    }
    return true; 
};

// Do not edit below this line
module.exports = palindromes;
