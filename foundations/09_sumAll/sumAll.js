const sumAll = function(x, y) {
    let range = (max(x,y)-min(x,y));
    let sum = 0;
    for (let i = 0; i < range; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
