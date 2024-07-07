import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TextInput from '../TextInput.vue'

describe('TextInput.vue', () => {
  it('renders the component', () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: '',
        type: 'text',
        label: 'Username',
        id: 'username',
        required: true
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the label correctly', () => {
    const label = 'Username'
    const wrapper = mount(TextInput, {
      props: {
        modelValue: '',
        type: 'text',
        label,
        id: 'username',
        required: true
      }
    })
    expect(wrapper.text()).toContain(label)
  })

  it('updates the modelValue on input', async () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: '',
        type: 'text',
        label: 'Username',
        id: 'username',
        required: true
      }
    })
    const input = wrapper.find('input')
    await input.setValue('new value')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['new value'])
  })

  it('shows error message when error prop is true', () => {
    const errorMessage = 'Invalid input'
    const wrapper = mount(TextInput, {
      props: {
        modelValue: '',
        type: 'text',
        label: 'Username',
        id: 'username',
        error: true,
        errorMessage,
        required: true
      }
    })
    expect(wrapper.text()).toContain(errorMessage)
  })

  it('applies error class when error prop is true', () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: '',
        type: 'text',
        label: 'Username',
        id: 'username',
        error: true,
        errorMessage: 'Invalid input',
        required: true
      }
    })
    const input = wrapper.find('.input__field--error')
    expect(input.exists()).toBe(true)
  })
})
