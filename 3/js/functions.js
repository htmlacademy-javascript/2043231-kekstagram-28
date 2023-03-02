//Функция для проверки длины строки.
const checkLengthString = (checkedString, numberOfCharacters) => checkedString.length <= numberOfCharacters;

checkLengthString('проверяемая строка', 18);
// console.log(lengthString('проверяемая строка', 20));
// console.log(lengthString('проверяемая строка', 18));
// console.log(lengthString('проверяемая строка', 10));

// Функция для проверки, является ли строка палиндромом.
const isPalindrome = (isPalindromeString) => {
  for (let i = 0; i < 0.5 * isPalindromeString.length; i++) {
    const analysisString = isPalindromeString.replaceAll(' ','').toLowerCase();
    if (analysisString.at(i) !== analysisString.at(-(i + 1))) {
      return false;
    }
  }
  return true;
};

isPalindrome('топот');
// console.log(isPalindrome('топот'));
// console.log(isPalindrome('ДовОд'));
// console.log(isPalindrome('Кекс'));
// console.log(isPalindrome('Лёша на полке клопа нашёл '));


//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
const makesPositiveInteger = (stringToInteger) => parseInt(stringToInteger.toString().replace(/\D/g,''), 10);

makesPositiveInteger ('2023 год');
// console.log(makesPositiveInteger ('2023 год'));
// console.log(makesPositiveInteger ('ECMAScript 2022'));
// console.log(makesPositiveInteger ('1 кефир, 0.5 батона'));
// console.log(makesPositiveInteger ('агент 007'));
// console.log(makesPositiveInteger ('а я томат'));
// console.log(makesPositiveInteger (2023));
// console.log(makesPositiveInteger (-1));
// console.log(makesPositiveInteger (1.5));

//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.
const getSymbols = (originalString, minLength, symbols) => {
  if (originalString.length < minLength) {
    const newStringLength = minLength - originalString.length;
    return symbols.slice(0, newStringLength % symbols.length) + symbols.repeat(newStringLength / symbols.length) + originalString;

  }
  return originalString;
};

getSymbols ('1', 2, '0');
// console.log(getSymbols ('1', 2, '0'));
// console.log(getSymbols ('1', 4, '0'));
// console.log(getSymbols ('q', 4, 'werty'));
// console.log(getSymbols ('q', 4, 'we'));
// console.log(getSymbols ('qwerty', 4, '0'));
