import { defineStore } from 'pinia'
import fetchRegions from '../api/regionApi'

const useUserStore = defineStore('user', {
  state: () => ({
    regions: [],
    email: '',
    name: '',
    lastName: '',
    region: '',
    error: null,
    loading: false
  }),
  actions: {
    setEmail (value) {
      this.email = value
    },
    setName (value) {
      this.name = value
    },
    setLastName (value) {
      this.lastName = value
    },
    setRegion (value) {
      this.region = value
    },
    async getRegions () {
      try {
        this.error = null
        this.loading = true
        const regionsData = await fetchRegions()
        this.regions = regionsData
      } catch {
        this.error = 'No se pudieron cargar las regiones'
      } finally {
        this.loading = false
      }
    }
  }
})

export default useUserStore
