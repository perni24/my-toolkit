import * as validation from "./internal/validation.js";

export function isNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

export function isInteger(value) {
  return Number.isInteger(value);
}

export function isPositive(value) {
  return value > 0 && isNumber(value);
}

export function isNegative(value) {
  return value < 0 && isNumber(value);
}

export function isEven(value) {
  return isInteger(value) && value % 2 === 0;
}

export function isOdd(value) {
  return isInteger(value) && value % 2 !== 0;
}

export function toNumber(value, fallback) {
  if (
    typeof value === "bigint" ||
    typeof value === "object" ||
    value === true ||
    value === false ||
    (typeof value === "string" ? value.trim() === "" : false) ||
    typeof value === "symbol"
  ) {
    return fallback;
  }
  const num = Number(value);
  if (Number.isNaN(num) || num === Infinity || num === -Infinity) {
    return fallback;
  }
  return num;
}

export function clamp(value, min, max) {
  if (!isNumber(value) || !isNumber(min) || !isNumber(max) || min > max) {
    return NaN;
  }
  return value > max ? max : value < min ? min : value;
}

export function roundTo(value, decimals) {
  if (
    !isNumber(value) ||
    !isNumber(decimals) ||
    decimals > 100 ||
    decimals < 0 ||
    !isInteger(decimals)
  ) {
    return NaN;
  }
  return Number(value.toFixed(decimals));
}

export function percentage(value, total) {
  if (!isNumber(value) || !isNumber(total)) {
    return NaN;
  }
  return total !== 0 ? (value / total) * 100 : 0;
}

export function sum(values) {
  let ris = 0;
  if (
    !validation.isEmptyArray(values)
  ) {
    return NaN;
  }
  for (const element of values) {
    if (!isNumber(element)) {
      return NaN;
    }
    ris += element;
  }
  return ris;
}

export function average(values) {
  const total = sum(values);
  if (Number.isNaN(total)) {
    return NaN;
  }
  return total / values.length;
}

export function min(values) {
  let minValue = null;
  if (
    !validation.isEmptyArray(values)
  ) {
    return NaN;
  }
  for (const element of values) {
    if (!isNumber(element)) {
      return NaN;
    }
    if (minValue === null || minValue > element) {
      minValue = element;
    }
  }
  return minValue;
}

export function max(values) {
  let maxValue = null;
  if (
    !validation.isEmptyArray(values)
  ) {
    return NaN;
  }
  for (const element of values) {
    if (!isNumber(element)) {
      return NaN;
    }
    if (maxValue === null || maxValue < element) {
      maxValue = element;
    }
  }
  return maxValue;
}

export function product(values) {
  let total = 1;
  if (
    !validation.isEmptyArray(values)
  ) {
    return NaN;
  }
  for (const element of values) {
    if (!isNumber(element)) {
      return NaN;
    }
    total *= element;
  }
  return total;
}

export function isBetween(value, min, max) {
  if (!isNumber(value) || !isNumber(min) || !isNumber(max)) {
    return false;
  }
  if (min > max) {
    return false;
  }
  if (min <= value && max >= value) {
    return true;
  }
  return false;
}

export function isCloseTo(value, target, tolerance) {
  if (!isNumber(value) || !isNumber(target) || !isNumber(tolerance)) {
    return false;
  }
  if (Math.abs(value - target) > tolerance) {
    return false;
  }
  return true;
}

export function median(values) {
  if (
    !validation.isEmptyArray(values)
  ) {
    return NaN;
  }
  for (const element of values) {
    if (!isNumber(element)) {
      return NaN;
    }
  }
  const half = Math.trunc(values.length / 2);
  const sortedValues = values.toSorted((a, b) => a - b);
  if (sortedValues.length % 2 !== 0) {
    return sortedValues[half];
  }
  if (sortedValues.length % 2 === 0) {
    return (
      sortedValues[half - 1] + (sortedValues[half] - sortedValues[half - 1]) / 2
    );
  }
}

export function mode(values) {
  
  if (
    !validation.isEmptyArray(values)
  ) {
    return NaN;
  }

  const set = new Set(values)
  let count = 0
  let ris = []

  for (const element of set) {

    if (!isNumber(element)) {
      return NaN;
    }
    let temp = values.reduce((count, num) => (num === element ? count + 1 : count), 0)
    if (temp === count) {
      ris = [...ris, element]
    }
    if (temp > count) {
      ris = [element]
      count = temp
    }
  }
  return ris.length > 1 ? NaN : ris[0]
}

export function countNumberOccurrences(values, target){
  if (
    !validation.isEmptyArray(values)
  ) {
    return NaN;
  }
  if(!isNumber(target)){
    return NaN
  }
  let count = 0
  for(const element of values){
    if (!isNumber(element)){
      return NaN
    }
    if(element === target){
      count ++
    }
  }
  return count 
}

export function uniqueNumbers(values){
  if (
    !validation.isEmptyArray(values)
  ) {
    return NaN;
  }
  for(const element of values){
    if (!isNumber(element)){
      return NaN
    }
  }
  const set = new Set(values)
  const ris = [...set]
  return ris
}

export function safeDivide(dividend, divisor, fallback){
  if(divisor === 0 || !isNumber(divisor)){
    return fallback
  }
  if(!isNumber(dividend)){
    return fallback
  }
  return dividend / divisor
}

export function percentageChange(previousValue, currentValue){
  if(!isNumber(previousValue) || !isNumber(currentValue) || previousValue === 0){
    return NaN
  }
  return (currentValue-previousValue)/Math.abs(previousValue)*100
}

export function mapRange(value, inputMin, inputMax, outputMin, outputMax){

  const intervalloInput = inputMax - inputMin
  const intervalloOut = outputMax - outputMin
  const distanzaValue = value - inputMin
  
  let posizioneRelativa = distanzaValue / intervalloInput
  let passoOut = intervalloOut * posizioneRelativa

  return outputMin + passoOut

}