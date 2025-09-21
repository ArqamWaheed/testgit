function capitalize(input) { 
    return input.slice(0, 1).toUpperCase() + input.slice(1, input.length);
}

function reverseString(input) {
    return ((input.split('')).reverse('')).join('');
}

const calculator = {
    add: function(val1, val2) {
        return val1 + val2;
    },
    subtract: function(val1, val2) {
        return val1 - val2;
    },
    divide: function(val1, val2) {
        return val1 / val2;
    },    
    multiply: function(val1, val2) {
        return val1 * val2;
    }
}

function caesarCipher(str, shift) {
  shift = shift % 26; 

  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char >= 'A' && char <= 'Z') {
      let charCode = char.charCodeAt(0);
      let shiftedCharCode = charCode + shift;

      if (shiftedCharCode > 'Z'.charCodeAt(0)) {
        shiftedCharCode -= 26;
      } else if (shiftedCharCode < 'A'.charCodeAt(0)) { // Handle negative shifts for 'A'
        shiftedCharCode += 26;
      }
      result += String.fromCharCode(shiftedCharCode);
    } 
    else if (char >= 'a' && char <= 'z') {
      let charCode = char.charCodeAt(0);
      let shiftedCharCode = charCode + shift;

      if (shiftedCharCode > 'z'.charCodeAt(0)) {
        shiftedCharCode -= 26;
      } else if (shiftedCharCode < 'a'.charCodeAt(0)) { // Handle negative shifts for 'a'
        shiftedCharCode += 26;
      }
      result += String.fromCharCode(shiftedCharCode);
    } 
    else {
      result += char;
    }
  }
  return result;
}

function analyzeArray(arrNum) {
    return {
        average: arrNum.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arrNum.length,
        min: Math.min(...arrNum),
        max: Math.max(...arrNum),
        length: arrNum.length,
    }
}

export {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
}