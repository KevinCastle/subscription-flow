export default async function fetchRegions () {
  // Your code here
  try {
    const response = await fetch('https://apis.digital.gob.cl/dpa/regiones')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Fetch error: ${error.message}`)
    return null
  }
}
