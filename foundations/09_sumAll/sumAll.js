const sumAll = function(x, y) {
    let max = Math.max(x, y);
    let min = Math.min(x, y);

    if (min < 0 || Number.isInteger(x) === false || Number.isInteger(y) === false || (min+max) % 1 != 0){
        return 'ERROR';
    }

    let sumRange = 0;
    for (let i = min; i <= max; i++){
        sumRange += i;
    }
    return sumRange;
};

// Do not edit below this line
module.exports = sumAll;
