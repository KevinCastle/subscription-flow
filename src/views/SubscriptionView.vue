<template>
  <div>
    <InputText
      id="input-text"
      v-model="inputValue"
      label="Enter Text"
      type="text"
      caption="caption"
      :error="false"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import InputText from '../components/InputText.vue'

export default {
  components: {
    InputText
  },
  setup() {
    const inputValue = ref('')

    return {
      inputValue
    }
  }
}
</script>

<style lang="scss" scoped></style>
