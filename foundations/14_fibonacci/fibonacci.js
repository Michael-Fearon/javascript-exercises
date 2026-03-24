const fibonacci = function(input) {
    sequence = [0,1]
    if (input === 0 || input === "0"){
        return 0;
    } else if (input < 0){
        return "OOPS";
    }

    for (let i=1; i!=input; i++){
        n = sequence[i-1] + sequence[i];
        sequence.push(n);
        console.log(sequence, input);
    }

    return sequence[input];
};


//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
// Do not edit below this line
module.exports = fibonacci;
