import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SelectInput from '../SelectInput.vue'

describe('SelectInput.vue', () => {
  it('renders the component with required props', () => {
    const wrapper = mount(SelectInput, {
      props: {
        modelValue: '',
        options: [{ codigo: '1', nombre: 'Option 1' }],
        label: 'Select Label',
        id: 'select1',
        required: true
      }
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('label').text()).toContain('Select Label')
    expect(wrapper.find('select').exists()).toBe(true)
    expect(wrapper.findAll('option').length).toBe(1)
  })

  it('displays the correct option text', () => {
    const options = [{ codigo: '1', nombre: 'Option 1' }]
    const wrapper = mount(SelectInput, {
      props: {
        modelValue: '',
        options,
        label: 'Select Label',
        id: 'select1',
        required: true
      }
    })
    expect(wrapper.find('option').text()).toBe(options[0].nombre)
  })

  it('updates the modelValue on change', async () => {
    const wrapper = mount(SelectInput, {
      props: {
        modelValue: '',
        options: [{ codigo: '1', nombre: 'Option 1' }],
        label: 'Select Label',
        id: 'select1',
        required: true
      }
    })
    const select = wrapper.find('select')
    await select.setValue('1')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['1'])
  })

  it('applies error class when error prop is true', () => {
    const wrapper = mount(SelectInput, {
      props: {
        modelValue: '',
        options: [{ codigo: '1', nombre: 'Option 1' }],
        label: 'Select Label',
        id: 'select1',
        error: true,
        errorMessage: 'Error message',
        required: true
      }
    })
    expect(wrapper.find('.select__field--error').exists()).toBe(true)
    expect(wrapper.find('.select__caption--error').text()).toContain('Error message')
  })
})
