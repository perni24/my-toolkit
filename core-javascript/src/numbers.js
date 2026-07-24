export function isNumber(value) {
    if(typeof value === "symbol"){
        return false
    }
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
    if(typeof value === "bigint" || typeof value === "object" || value === true || value === false || (typeof value === "string" ? value.trim() === "" : false) || typeof value === "symbol" ){
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
    if (typeof values !== "object" || values === null || Object.keys(values).length === 0 || !Array.isArray(values)){
        return NaN
    }
    for(const element of values){
        if(!isNumber(element)){
            return NaN
        }
        ris += element
    }
    return ris 
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
    if(typeof values !== "object" || values === null || Object.keys(values).length === 0 || !Array.isArray(values)){
        return NaN
    }
    for(const element of values){
        if(!isNumber(element)){
            return NaN
        }
        if(minValue == null || minValue > element){
            minValue = element
        }
    }
    return minValue 
}

export function max(values){
    let maxValue
    if(typeof values !== "object" || values === null || Object.keys(values).length === 0 || !Array.isArray(values)){
        return NaN
    }
    for(const element of values){
        if(!isNumber(element)){
            return NaN
        }
        if(maxValue == null || maxValue < element ){
            maxValue = element
        }
    }
    return maxValue
}

export function product(values){
    let total = 1 
    if (typeof values !== "object" || values === null || Object.keys(values).length === 0 || !Array.isArray(values)){
        return NaN
    }
    for(const element of values){
        if(element === 0){
            return 0
        }
        if(!isNumber(element)){
            return NaN
        }
        total *= element
    }
    return total
}

export function isBetween(value, min, max){
    if(min > max ){
        return false
    }
    if( !isNumber(value) || !isNumber(min) || !isNumber(max)){
        return false
    }
    if( min <= value && max >= value ){
        return true
    }
    return false
}

export function isCloseTo(value, target, tolerance){
    if(!isNumber(value) || !isNumber(target) || !isNumber(tolerance)){
        return false
    }
    if(Math.abs(value - target) > tolerance){
        return false
    }
    return true
}

export function median(values){
    if (typeof values !== "object" || values === null || Object.keys(values).length === 0 || !Array.isArray(values)){
        return NaN
    }
    for(const element of values){
        if(!isNumber(element)){
            return NaN
        }
    }
    let half = Math.trunc(values.length/2)
    values = values.sort((a, b) => a - b)
    if(values.length % 2 !== 0){
        return values[half]
    }
    if(values.length % 2 === 0){
        return values[half-1] + (values[half] - values[half-1])/2
    }
}