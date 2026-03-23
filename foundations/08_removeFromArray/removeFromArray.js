const removeFromArray = function(array, valToRemove) {
    let newArray = [];
    let len = array.length;
    let i = 0;
    console.log('Removing: ', valToRemove);
    for (let i = 0; i < 5; i++){
        if (array[i] != valToRemove){
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
