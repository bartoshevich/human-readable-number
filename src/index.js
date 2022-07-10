module.exports = function toReadable (number) {
   

    const ones  = {
        0: 'zero',
        1: 'one', 
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'     
    }
   
    const teens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }

    const tens = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'      
    }

    const hundreds = {
        100: 'one hundred' ,
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred'
    }

    if (number <= 9) {
        return ones[number]; 
    }  else if (number > 9 && number <= 19) {
        return teens[number];
    }  else if (number >=20 && number < 100 && number % 10 === 0) {
       return tens[number];
    } else if (number > 20 && number < 100 && number % 10 !== 0) {      
        let x = ('' + number).split('');
        let d = x[0]*10;
        let e = x[1];
        return tens[d] + ' ' + ones[e];      
    } else if (number >= 100 && number < 1000 && number % 100 === 0) {
      return hundreds[number];
    } else if (number >= 100 && number < 1000 && number % 100 !== 0 ) {
      let x = ('' + number).split('');
      let t = x[0]*100;
      let d = x[1]*10;
      let e = x[2];
      let y = x[1] + x[2];
      if (y  < 10) {
        return hundreds[t] + ' ' + ones[e];
      } else if (y > 9 && y <= 19) {
        return hundreds[t] + ' ' + teens[y];
      } else if (y > 19 && y % 10 === 0) {
        return hundreds[t] + ' ' + tens[y];
      } else {
      return hundreds[t] + ' ' + tens[d]  + ' ' + ones[e];
    }
}
}