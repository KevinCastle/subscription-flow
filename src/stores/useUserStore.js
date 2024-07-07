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
        this.loading = true
        const { data, error } = await fetchRegions()
        if (error) {
          this.error = error
        } else {
          this.regions = data
          this.error = null
        }
      } finally {
        this.loading = false
      }
    }
  }
})

export default useUserStore
