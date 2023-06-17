"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var pivot = array[0];
  var left = [];
  var right = [];
  var equal = [];
  if (array.length <= 1) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      equal.push(array[i]);
    }
  }
  return quickSort(left).concat(equal).concat(quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //okey probemos ahora
  let middle = Math.floor(array.length/2)
let left = array.slice(0, middle)
let right = array.slice(middle) 
  if (array.length === 1) {
    return array;
  }
 return merge(mergeSort(left), mergeSort(right))

function merge(left, right){
let leftIndex = 0
let rightIndex = 0
let mergeArray = []
while(leftIndex<left.length && rightIndex<right.length){
  if (left[leftIndex]< right[rightIndex]){
    mergeArray.push(left[leftIndex])
    leftIndex++
  } else {
    mergeArray.push(right[rightIndex])
    rightIndex++
  }
}
return mergeArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
