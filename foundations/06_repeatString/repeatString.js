const repeatString = function(string, repeatN) {
    let i = 0;
    let outputString = "";
    if (repeatN < 0){
        return "ERROR";
    }

    while (i < repeatN){
        outputString += (string);
        i ++;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
