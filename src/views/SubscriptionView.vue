<template>
  <div>
    <form @submit.prevent="onSubmit"></form>
    <InputText
      id="input-text"
      v-model="email"
      label="Enter Text"
      type="email"
      caption="caption"
      :error="!!errors.email"
      :error-message="errors.email"
    />
    <button type="submit">Subscribe</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import InputText from '../components/InputText.vue'

export default {
  components: {
    InputText
  },
  setup() {
    const inputValue = ref('')

    const { handleSubmit, errors } = useForm()
    const { value: email } = useField('email', yup.string().required().email())

    const onSubmit = handleSubmit((values) => {
      // Handle form submission
      console.log(values)
    })

    return { inputValue, email, errors, onSubmit }
  }
}
</script>

<style lang="scss" scoped></style>
