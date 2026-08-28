export function isEmptyArray(value) {
  if (
    typeof value !== "object" ||
    value === null ||
    Object.keys(value).length === 0 ||
    !Array.isArray(value)
  ){
    return false
  }
  return true
}