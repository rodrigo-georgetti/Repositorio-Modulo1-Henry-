"use strict";

function BinarioADecimal(number) {
  let binaryNumber = number;
  let decimalNumber = 0;
  for (let i = 0; i < binaryNumber.length; i++) {
    decimalNumber +=
      binaryNumber[i] * Math.pow(2, binaryNumber.length - i - 1);
  }
  return decimalNumber;
}

function DecimalABinario(number) {
  let decimalNumber = number;
  let binariNumber = "";
  while (decimalNumber > 0) {
    binariNumber += decimalNumber % 2;
    decimalNumber = Math.floor(decimalNumber / 2);
  }
  return binariNumber.split("").reverse().join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
