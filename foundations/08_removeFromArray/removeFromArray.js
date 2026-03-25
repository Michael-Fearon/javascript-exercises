const removeFromArray = function(array, ...valsToRemove) {
    return array.filter(function(val){
        return !valsToRemove.includes(val)
    });
    // return array.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
