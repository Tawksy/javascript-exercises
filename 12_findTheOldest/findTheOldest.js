const findTheOldest = function(arr) {

    const DATESOFBIRTH = arr.map(dob => dob.yearOfBirth);
    const DATESOFDEATH = arr.map(dod => dod.yearOfDeath);
    const NAMES = arr.map(nms => nms.name);

    const DIFFARR = arr;
    for (let i = 0; i <= 3; i++){
        DIFFARR[i] = DATESOFDEATH[i] - DATESOFBIRTH [i];
    }
    console.log(DIFFARR)
    return DIFFARR;
    
};

// Do not edit below this line
module.exports = findTheOldest;
