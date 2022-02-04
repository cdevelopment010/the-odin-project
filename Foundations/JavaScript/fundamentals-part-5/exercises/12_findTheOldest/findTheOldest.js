const findTheOldest = function(obj) {
    let oldest = obj.reduce((initial,person) => {
        if (Object.keys(initial).length === 0) {
            initial = person;
            console.log(initial); 
        } 

        const initialAge = 'yearOfDeath' in initial ? initial.yearOfDeath - initial.yearOfBirth : ((new Date()).getFullYear()) - initial.yearOfBirth; 
        const personAge = 'yearOfDeath' in person ? person.yearOfDeath - person.yearOfBirth : ((new Date()).getFullYear()) - person.yearOfBirth;

        console.log(initialAge, personAge); 

        if (personAge > initialAge) {
            initial = person;
        }

        return initial;


    }, {}); 
    return oldest; 
};

// Do not edit below this line
module.exports = findTheOldest;
