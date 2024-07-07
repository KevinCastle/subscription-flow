import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import LoaderScreen from '../LoaderScreen.vue'
import useUserStore from '../../stores/useUserStore'

describe('LoaderScreen.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('displays the loader screen when loading is true', () => {
    const userStore = useUserStore()
    userStore.loading = true
    const wrapper = mount(LoaderScreen, {
      global: {
        mocks: {
          $t: (msg) => msg
        }
      }
    })
    expect(wrapper.find('.loader-screen').exists()).toBe(true)
  })

  it('does not display the loader screen when loading is false', () => {
    const userStore = useUserStore()
    userStore.loading = false
    const wrapper = mount(LoaderScreen, {
      global: {
        mocks: {
          $t: (msg) => msg
        }
      }
    })
    expect(wrapper.find('.loader-screen').exists()).toBe(false)
  })
})
