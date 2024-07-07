import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonInput from '../ButtonInput.vue'

describe('ButtonInput.vue', () => {
  it('renders the component with default props', () => {
    const wrapper = mount(ButtonInput)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.classes()).toContain('button--primary')
    expect(wrapper.text()).toBe('')
  })

  it('displays the text prop correctly', () => {
    const text = 'Click Me'
    const wrapper = mount(ButtonInput, {
      props: { text, variant: 'outline', label: 'button' }
    })
    expect(wrapper.text()).toContain(text)
  })

  it('applies the variant class correctly', () => {
    const variant = 'outline'
    const wrapper = mount(ButtonInput, {
      props: { variant, text: 'Click Me', label: 'button' }
    })
    expect(wrapper.classes()).toContain(`button--${variant}`)
  })

  it('is disabled when the disabled prop is true', () => {
    const wrapper = mount(ButtonInput, {
      props: { disabled: true, text: 'Click Me', variant: 'outline', label: 'button' }
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('renders as a link when type is "link"', () => {
    const href = 'https://example.com'
    const wrapper = mount(ButtonInput, {
      props: { type: 'link', href, text: 'Click Me', variant: 'outline', label: 'button' }
    })
    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.attributes('href')).toBe(href)
  })

  it('emits a "click" event when clicked', async () => {
    const wrapper = mount(ButtonInput, {
      props: { text: 'Click Me', variant: 'outline', label: 'button' }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('does not emit a "click" event when disabled', async () => {
    const wrapper = mount(ButtonInput, {
      props: { disabled: true, text: 'Click Me', variant: 'outline', label: 'button' }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })
})
