const palindromes = function (string) {
    let text = string.replace(/\W/ig, "").toLowerCase();
    let arr = text.split('');
    let reversed = arr.reverse().join('');
    console.log('forward', text);
    console.log('reversed', reversed);

    if (text === reversed){
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
