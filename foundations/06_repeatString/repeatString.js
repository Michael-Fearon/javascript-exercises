const repeatString = function(string, repeatN) {
    let outputString = "";
    if (repeatN < 0){
        return "ERROR";
    }
    for (let i=0; i < repeatN; i++){
        outputString += (string);
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
