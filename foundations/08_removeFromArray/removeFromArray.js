const removeFromArray = function(array, ...valsToRemove) {
    let newArray = [];
    let len = array.length;
    let i = 0;
    console.log('Removing: ', valsToRemove);
    for (let i = 0; i < len; i++){
        if (!valsToRemove.includes(array[i])){
            console.log(array[i])
            newArray.push(array[i]);
        } else {
            continue;
            
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
