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
    if(typeof value === "bigint" || typeof value === "object" || value === true || value === false || (typeof value === "string" ? value.trim() === "" : false) ){
        return fallback
    }
    let num = Number(value)
    if(Number.isNaN(num) || num === Infinity || num === -Infinity){
        return fallback
    }
    return parseFloat(num)
}

export function clamp(value, min, max){
    if(!isNumber(value) || !isNumber(min) || !isNumber(max) || min > max){
        return NaN
    }
    return value > max ? max : value < min ? min : value  
}

export function roundTo(value, decimals){
    if(!isNumber(value) || !isNumber(decimals) || decimals > 100 || decimals < 0 || !isInteger(decimals)){
        return NaN
    }
    return Number(value.toFixed(decimals))
}

export function percentage(value, total){
    if(!isNumber(value) || !isNumber(total) ){
        return NaN
    }
    return total !== 0 ? value / total * 100 : 0
}

export function sum(values){
    let ris = 0
    let error = 0
    if (typeof values !== "object" || values === null || Object.keys(values).length === 0){
        return NaN
    }
    values.forEach(element => {
        if(!isNumber(element)){
            error ++
        }
        ris += element
    });
    return error > 0 ? NaN : ris 
}

export function average(values){
    let total = sum(values)
    if( Number.isNaN(total) ){
        return NaN
    }
    return total/values.length
}

export function min(values){
    let minValue
    let error = 0
    if(typeof values !== "object" || values === null || Object.keys(values).length === 0){
        return NaN
    }
    values.forEach(element => {
        if(!isNumber(element)) error ++
        if(minValue == null || minValue > element) minValue = element
    })
    return error > 0 ? NaN : minValue 
}