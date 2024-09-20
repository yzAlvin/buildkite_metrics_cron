export function dateNow() {
  const date = new Date(Date.now())

  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const dd = String(date.getDate()).padStart(2, '0')

  const formattedDate = `${yyyy}-${mm}-${dd}`

  return formattedDate
}

export function objToCsvRow(obj) {
  return Object.values(obj).join(', ')
}

export function objToCsvHeader(obj) {
  return Object.keys(obj).join(', ')
}
