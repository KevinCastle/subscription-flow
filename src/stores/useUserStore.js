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
    loading: false,
    finished: false
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
      const { data, error } = await fetchRegions()
      if (error) {
        this.error = error
      } else {
        this.regions = data
        this.error = null
      }
    },
    setLoading (value) {
      this.loading = value
    },
    setFinished (value) {
      this.finished = value
    }
  }
})

export default useUserStore
