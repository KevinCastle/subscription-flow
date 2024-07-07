import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import ErrorAlert from '../ErrorAlert.vue'
import useUserStore from '../../stores/useUserStore'

describe('ErrorAlert.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('does not render when there is no error message', () => {
    const userStore = useUserStore()
    userStore.error = ''
    const wrapper = mount(ErrorAlert)
    expect(wrapper.find('.error-alert').exists()).toBe(false)
  })

  it('displays the error message when present', () => {
    const userStore = useUserStore()
    const testErrorMessage = 'Test Error Message'
    userStore.error = testErrorMessage
    const wrapper = mount(ErrorAlert)
    expect(wrapper.find('.error-alert').exists()).toBe(true)
    expect(wrapper.text()).toContain(testErrorMessage)
  })
})
