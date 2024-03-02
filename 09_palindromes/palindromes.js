const palindromes = function (...sentence) {
    // Join the array elements into a single string
    let cleanSentence = sentence.join('').replace(/[.,;:!? ]/g, '').toLowerCase();
  
    let holderSentence = '';
    for (let i = cleanSentence.length; i !== 0; i--) {
      holderSentence += cleanSentence[i - 1];
    }
  
    return cleanSentence === holderSentence;
  };

// Do not edit below this line
module.exports = palindromes;
