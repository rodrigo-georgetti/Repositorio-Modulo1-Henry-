"use strict";

function BinarioADecimal(num) {
  var numeroBinario = num;
  var numeroDecimal = 0;
  for (let i = 0; i < numeroBinario.length; i++) {
    numeroDecimal +=
      numeroBinario[i] * Math.pow(2, numeroBinario.length - i - 1);
  }
  return numeroDecimal;
}

function DecimalABinario(num) {
  var numeroDecimal = num;
  var numeroBinario = "";
  while (numeroDecimal > 0) {
    numeroBinario += numeroDecimal % 2;
    numeroDecimal = Math.floor(numeroDecimal / 2);
  }
  return numeroBinario.split("").reverse().join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
