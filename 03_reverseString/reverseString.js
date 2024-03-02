const reverseString = function(word) {  // Initialisiere Word (Hallo)
    if (typeof word !== 'string'){ 
        return "ERROR";
    }
    
    let lengthOfWord = word.length; // LengthOfWord = 5 
    let reverseWord = '' // +

    for (let i = lengthOfWord - 1; i >= 0; i--) {
        reverseWord += word.charAt(i);
    }

    word = reverseWord
    return word;

 
  
};

// Do not edit below this line
module.exports = reverseString;
