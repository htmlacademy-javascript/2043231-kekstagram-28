//Функция для проверки длины строки.
function lengthString (checkedString, numberOfCharacters) {
  return checkedString.length <= numberOfCharacters;
}

lengthString('проверяемая строка', 18);
// console.log(lengthString('проверяемая строка', 20));
// console.log(lengthString('проверяемая строка', 18));
// console.log(lengthString('проверяемая строка', 10));

// Функция для проверки, является ли строка палиндромом.
function isPalindrome (isPalindromeString) {
  for (let i = 0; i < 0.5 * isPalindromeString.length; i++) {
    const analysisString = isPalindromeString.replaceAll(' ','').toLowerCase();
    return analysisString.at(i) === analysisString.at(-(i + 1));
  }
}

isPalindrome('топот');
// console.log(isPalindrome('топот'));
// console.log(isPalindrome('ДовОд'));
// console.log(isPalindrome('Кекс'));
// console.log(isPalindrome('Лёша на полке клопа нашёл '));


//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
function makesPositiveInteger (stringToInteger) {
  if (typeof stringToInteger === 'string') {
    let totalNumber = '';
    for (let i = 0; i < stringToInteger.replace(/\D/g,'').length; i++) {
      totalNumber += stringToInteger.replace(/\D/g,'')[i];
    }
    return parseInt(totalNumber, 10);
  }
  if (Number.isInteger(stringToInteger)) {
    return Math.abs(stringToInteger);
  }
  return Math.round(stringToInteger * 10);
}

makesPositiveInteger ('2023 год');

// console.log(makesPositiveInteger ('2023 год'));
// console.log(makesPositiveInteger ('ECMAScript 2022'));
// console.log(makesPositiveInteger ('1 кефир, 0.5 батона'));
// console.log(makesPositiveInteger ('а я томат'));
// console.log(makesPositiveInteger (2023));
// console.log(makesPositiveInteger (-1));
// console.log(makesPositiveInteger (1.5));

//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.
function getSymbols (originalString, minLength, symbols) {
  let newString = '';
  if (originalString.length < minLength) {
    if (symbols.length < minLength) {
      if (minLength % (symbols.length + originalString.length) === 0) {
        for (let i = 0; i < symbols.length; i++) {
          const nRepeat = minLength - symbols.length;
          newString = symbols[i].repeat(nRepeat);
        }
        return newString + originalString;
      }
      newString = symbols[0] + symbols[0] + symbols[1];
      return newString + originalString;
    }
    const nSlice = minLength - symbols.length - originalString.length;
    return symbols.slice(0, nSlice) + originalString;
  }
  return originalString;
}

getSymbols ('1', 2, '0');
// console.log(getSymbols ('1', 2, '0'));
// console.log(getSymbols ('1', 4, '0'));
// console.log(getSymbols ('q', 4, 'werty'));
// console.log(getSymbols ('q', 4, 'we'));
// console.log(getSymbols ('qwerty', 4, '0'));
