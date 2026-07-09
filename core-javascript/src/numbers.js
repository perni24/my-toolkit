export function isNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

export function isInteger(value){
    return Number.isInteger(value)
}

export function isPositive(value){
    return value >= 0 && typeof value === "number"
}