export function isNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

export function isInteger(value){
    return Number.isInteger(value)
}

export function isPositive(value){
    return value > 0 && isNumber(value)
}

export function isNegative(value){
    return value < 0 && isNumber(value)
}

export function isEven(value){
    return isInteger(value) && value % 2 === 0
}

export function isOdd(value){
    return isInteger(value) && value % 2 !== 0
}

export function toNumber(value, fallback){
    let num = Number(value)
    return (!Number.isNaN(num) && ![0,1].includes(num) && num !== Infinity && num !== -Infinity && typeof value !== "object") || (num === 0 && (value == "0" || value?.includes("0")) && value !== false) || (num === 1 && (value == "1" || value?.includes("1")) && value !== true) ? parseFloat(num) : fallback
}

export function clamp(value, min, max){
    
}