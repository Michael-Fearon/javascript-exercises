const findTheOldest = function(people) {
    let max_age = 0;
    let data = people;

    for (let i=0; i < people.length; i++){
        entry = data[i];
        let deathYear = entry.yearOfDeath || new Date().getFullYear();
        let birthYear = entry.yearOfBirth;

        let age = deathYear - birthYear;
        max_age = Math.max(age, max_age);
        data[i]['age'] = (age);
    }

    for (let i=0; i < data.length; i++){
        if(data[i]['age'] === max_age){
            return (data[i]);
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
