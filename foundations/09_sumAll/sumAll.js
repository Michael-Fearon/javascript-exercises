const sumAll = function(x, y) {
    let max = Math.max(x, y);
    let min = Math.min(x, y);
    let total = (x+y);
    let diff = (Math.max(x,y)- Math.min(x,y));

    if (min < 0 || Number.isInteger(x) === false || Number.isInteger(y) === false || total % 1 != 0){
        return 'ERROR';
    }

    let sumRange = 0;
    let i = min;
    while (i <= max){
        sumRange += i;
        i++;
        console.log('sumRange', sumRange);
    }
    return sumRange;
};

// Do not edit below this line
module.exports = sumAll;
