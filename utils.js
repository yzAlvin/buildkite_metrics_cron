export function objToCsvRow(obj) {
  return Object.values(obj).join(', ')
}

export function objToCsvHeader(obj) {
  return Object.keys(obj).join(', ')
}
