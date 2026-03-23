const removeFromArray = function(array, valToRemove) {
    let newArray = [];
    let len = array.length;
    let i = 0;
    console.log('Removing: ', valToRemove);
    while (i < len){
        if (array[i] != valToRemove){
            console.log(array[i])
            newArray.push(array[i]);
            i++;
        } else {
            i++;
            continue;
            
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
