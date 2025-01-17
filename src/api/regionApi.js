export default async function fetchRegions () {
  try {
    const response = await fetch('https://apis.digital.gob.cl/dpa/regiones')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return { data, error: null }
  } catch (error) {
    return { data: null, error: error.message }
  }
}
